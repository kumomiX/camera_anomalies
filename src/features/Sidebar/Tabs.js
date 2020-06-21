import React from 'react'
import { Tabs, Tab } from '@material-ui/core'
import { useLocation } from 'react-router'
import { Videocam, Notifications } from '@material-ui/icons'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import NavTab from 'components/NavTab'
import Flex from 'components/Flex'

// const NavTab = (props) => <Tab component={NavLink} {...props} />

const Wrapper = styled(Flex)`
  border-top: 1px solid var(--color-subtle-background-darker);
  & > * {
    flex: 1;
  }
`

export default function SidebarTabs({ ...props }) {
  const location = useLocation()

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
        <Videocam />
      </NavTab>
      <NavTab aria-label="notifications" to="/notifications">
        <Notifications />
      </NavTab>
    </Wrapper>
  )
}
