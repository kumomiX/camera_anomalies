import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-areas: 'main';
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  height: 100vh;
  overflow: hidden;
`

const Main = styled.main`
  /* padding-top: var(--spacing-s); */
  display: grid;
  grid-template-areas: 'sidebar view';
  grid-template-columns: 365px 1fr;
  align-items: start;
  --header-height: 68px;

  overflow: auto hidden;
  height: 100%;
  grid-auto-rows: 1fr;

  & > aside {
    grid-area: sidebar;
    box-shadow: var(--shadow-main) inset;
  }
  & > *:last-child {
    border-radius: 15px !important;
  }
`

export default function AppTemplate({ sidebar, children }) {
  return (
    <Wrapper>
      <Main>
        {sidebar}
        {children}
      </Main>
    </Wrapper>
  )
}
