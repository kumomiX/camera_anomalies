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
    padding: ${(p) => p.theme.sizes.scale[2]};
    background: ${(p) => p.theme.palette.background.lightgrey};
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
    }
`

export default SearchField
