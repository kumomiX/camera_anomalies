import React from 'react'
import styled from 'styled-components'
import CamerasSearch from 'features/cameras/Search'
import { IconButton, Tooltip } from '@material-ui/core'
import CamerasList from 'features/cameras/List'
import Header from 'features/Header'
import Tabs from './Tabs'
import TemplatesList from 'features/templates/TemplatesList'
import { UilPlusCircle } from '@iconscout/react-unicons'

const Wrapper = styled.aside`
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
  padding: var(--spacing-s);
  height: var(--header-height);
`

export default function Sidebar() {
  return (
    <Wrapper>
      <Header />
      <Menu>
        <CamerasSearch />
        <Tooltip title="Добавить камеру">
          <IconButton style={{ marginLeft: 'var(--spacing-s)' }}>
            <UilPlusCircle />
          </IconButton>
        </Tooltip>
      </Menu>
      {/* <CamerasList /> */}
      <TemplatesList />
      <Tabs style={{ marginTop: 'auto' }} />
    </Wrapper>
  )
}
