import React from 'react'
import { InputBase, InputAdornment } from '@material-ui/core'
import { Search } from 'react-feather'
import styled from 'styled-components'

const SearchField = styled(InputBase).attrs((p) => ({
  type: 'search',
  inputProps: {
    style: { padding: 0 },
  },
  startAdornment: (
    <InputAdornment position="start">
      <Search style={{ height: 18, width: 18 }} />
    </InputAdornment>
  ),
}))`
  && {
    padding: var(--spacing-s);
    border-radius: var(--br-m);

    transition-property: background-color, border-color, border-radius;
    transition-duration: 0.25s;
    transition-timing-function: ease;

    background: var(--color-subtle-background);

    &:hover,
    &:focus,
    &:active {
      background: var(--color-subtle-background-darker);
    }

    &:focus-within {
      background: ${(p) => {
        switch (p.color) {
          // case 'success':
          //   return p.theme.palette.success['50']
          case 'error':
            return 'var(--color-error-background)'
          default:
            return 'var(--color-secondary)'
        }
      }};
      color: ${(p) => {
        switch (p.color) {
          case 'error':
            return 'var(--color-error)'
          default:
            return 'var(--color-secondary-contrast)'
        }
      }};
    }
  }
`

export default SearchField

/* background: ${(p) => p.theme.palette.background.lightgrey};
    border-radius: 15px;
    transition-property: background-color, border-color,border-radius;
    transition-duration: 0.25s;
    transition-timing-function: ease;

    &:hover,
    &:focus,
    &:active {
      background: ${(p) => p.theme.palette.background.grey};
    };

    &:focus-within {
      background: ${(p) => {
        switch (p.color) {
          // case 'success':
          //   return p.theme.palette.success['50']
          case 'error':
            return p.theme.palette.error.light
          default:
            return p.theme.palette.secondary.main
        }
      }};
      ;
      color : ${(p) => {
        switch (p.color) {
          case 'error':
            return p.theme.palette.error.light
          default:
            return p.theme.palette.secondary.contrastText
        }
      }};
    } */
