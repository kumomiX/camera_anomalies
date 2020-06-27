import React from 'react'
import { useLocation } from 'react-router'
import styled from 'styled-components'
import NavTab from 'components/NavTab'
import Flex from 'components/Flex'
import { Typography } from '@material-ui/core'
import { UilVideo, UilBell } from '@iconscout/react-unicons'

// const NavTab = (props) => <Tab component={NavLink} {...props} />

const Wrapper = styled(Flex)`
  border-top: 1px solid var(--color-subtle-background-darker);
  & > * {
    flex: 1;
  }
`

export default function SidebarTabs({ ...props }) {
  return (
    // <Tabs
    //   value={location}
    //   style={{ fontSize: 128 }}
    //   scrollButtons="off"
    //   color="primary"
    //   variant="fullWidth"
    //   {...props}
    // >

    <Wrapper {...props}>
      <NavTab aria-label="videocam" to="/cameras">
        <UilVideo />
        <Typography textAlign="center" color="inherit" fontWeight="inherit">
          Камеры
        </Typography>
      </NavTab>
      <NavTab aria-label="notifications" to="/notifications">
        <UilBell />
        <Typography textAlign="center" color="inherit">
          Уведомления
        </Typography>
      </NavTab>
    </Wrapper>
  )
}
