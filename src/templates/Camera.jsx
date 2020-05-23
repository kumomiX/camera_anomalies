import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Gradient } from 'assets/gradient.svg'

const Wrapper = styled.article`
  /* padding: var(--spacing-s); */
  height: 100%;
  overflow: auto;
`

const Header = styled.header`
  height: var(--header-height);
  padding: var(--spacing-s) var(--spacing-xxl);
  position: sticky;
  top: 0;
  background: var(--color-background);
  z-index: 100;

  border-bottom: 1px solid var(--color-subtle-background);

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
  overflow: auto hidden;

  gap: var(--spacing-xxl);

  &:first-child {
    grid-area: stream;
  }
  &:nth-child(2) {
    grid-area: logs;
  }
`

export default function CameraTemplate({ header, children }) {
  return (
    <Wrapper>
      <Header>
        {header}
        {/* <Gradient /> */}
      </Header>
      <Body>{children}</Body>
    </Wrapper>
  )
}
