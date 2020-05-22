import React from 'react'
import styled from 'styled-components'
import CamerasSearch from 'features/cameras/Search'
import { Edit } from 'react-feather'
import { IconButton } from '@material-ui/core'
import CamerasList from 'features/cameras/List'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border-right: 1px solid var(--color-subtle-background);
  height: 100%;
  flex-direction: column;
`

const Menu = styled.menu`
  display: flex;
  align-items: center;
  height: fit-content;
  width: 100%;
  margin: 0;
  padding: 0;
  padding: var(--spacing-s);
`

export default function Sidebar() {
  return (
    <Wrapper>
      <Menu>
        <CamerasSearch />
        <IconButton style={{ marginLeft: 'var(--spacing-s)' }}>
          <Edit />
        </IconButton>
      </Menu>
      <CamerasList />
    </Wrapper>
  )
}
