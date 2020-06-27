import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.article`
  height: 100%;
  display: grid;
  grid-template-rows: var(--header-height) 1fr;
  overflow: hidden auto;
`

const Header = styled.header`
  height: var(--header-height);
  padding: var(--spacing-s) var(--spacing-xxl);
  padding-left: 0;
  position: sticky;
  top: 0;
  background: var(--color-background);
  z-index: 100;
  border-bottom: 1px solid var(--color-subtle-background);
  display: flex;

  /* & > svg {
    z-index: 0;
    pointer-events: none;
  } */
`

const Body = styled.div`
  padding: var(--spacing-s) var(--spacing-xxl);
  display: grid;
  grid-template-areas: 'stream logs';
  grid-template-columns: 1fr 1fr;

  gap: var(--spacing-xxl);

  & > *:first-child {
    grid-area: stream;
    display: grid;
    gap: var(--spacing-xl);
    align-items: start;
    grid-auto-rows: max-content;
    overflow: auto hidden;
  }
  & > *:nth-child(2) {
    grid-area: logs;
    overflow: auto hidden;
    align-items: start;
    grid-auto-rows: max-content;
  }
`

export default function CameraTemplate({ header, children }) {
  return (
    <Wrapper>
      <Header>{header}</Header>
      <Body>{children}</Body>
    </Wrapper>
  )
}
