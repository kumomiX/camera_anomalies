import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Tab from '@material-ui/core'

export default styled(NavLink).attrs((p) => ({
  activeStyle: {
    opacity: 1,
    color: 'var(--color-primary)',
    cursor: 'default',
  },
}))`
  /* padding: 2rem; */
  --icon-size: 28px;

  height: calc(var(--icon-size) + var(--spacing-m) * 2);
  border-radius: 40px 0 0 40px;
  text-decoration: none;
  color: var(--color-subtle-background-darker);
  /* opacity: 0.4; */
  font-family: var(--font-family);
  transition: all 0.25s ease;
  font-weight: var(--font-weight-bold);
  background-color: transparent;
  justify-content: flex-start;
  display: inline-flex;
  align-items: center;
  font-size: 16px;
  display: inline-flex;
  justify-content: center;
  flex-direction: column;

  transition: 0.25s ease all;

  &:hover {
    color: var(--color-primary-lighter);
  }

  & > svg {
    width: var(--icon-size);
    height: var(--icon-size);
    color: inherit !important;
  }
`
