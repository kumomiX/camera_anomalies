import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Logo } from 'assets/logo.svg'

const Wrapper = styled.header`
  width: 100%;
  height: 60px;
  display: grid;
  border-bottom: 1px solid var(--color-subtle-background);
  padding: var(--spacing-xs) var(--spacing-s);
  & > svg {
    height: 100%;
  }
`

export default function Header({ children }) {
  return (
    <Wrapper>
      <Logo />
    </Wrapper>
  )
}
