import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'main';
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr;
  min-height: 100vh;
  /* padding: var(--spacing-s); */

  & > header {
    grid-area: header;
  }
`

const Main = styled.main`
  /* padding-top: var(--spacing-s); */
  display: grid;
  grid-template-areas: 'sidebar view';
  grid-template-columns: 365px 1fr;
  align-items: start;

  &:first-child {
    grid-area: sidebar;
  }
`

export default function AppTemplate({ header, sidebar, children }) {
  return (
    <Wrapper>
      {header}
      <Main>
        {sidebar}
        {children}
      </Main>
    </Wrapper>
  )
}
