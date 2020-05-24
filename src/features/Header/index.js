import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Logo } from 'assets/logo.svg'
import { Typography } from '@material-ui/core'

const Wrapper = styled.header`
  width: 100%;
  height: var(--header-height);
  display: grid;
  border-bottom: 1px solid var(--color-subtle-background);
  padding: var(--spacing-xs) var(--spacing-s);
  grid-auto-columns: max-content;
  grid-template-columns: repeat(auto-fit, minmax(max-content, 0));
  align-items: center;
  gap: var(--spacing-s);

  & > svg {
    height: 100%;
  }
`

export default function Header({ children }) {
  return (
    <Wrapper>
      <Logo />
      <div>
        <Typography variant="h6">Фарукшин Эрик</Typography>
        {/* <Typography variant="h6"></Typography> */}
      </div>
    </Wrapper>
  )
}
