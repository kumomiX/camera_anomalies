import React from 'react'
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
} from '@material-ui/core'
import { Link, useLocation, matchPath } from 'react-router-dom'
import Status from './Status'
import AnalyticsStatus from './AnalyticsStatus'

export default function Camera({
  uuid,
  is_online,
  is_active,
  stream_url,
  thumb,
  ip,
  ...props
}) {
  const location = useLocation()

  const match = matchPath(location.pathname, {
    path: '/cameras/:camera',
    exact: true,
    strict: false,
  })

  return (
    <>
      <ListItem
        button
        selected={match?.params?.camera === uuid.toString()}
        component={Link}
        to={`/cameras/${uuid}`}
        {...props}
      >
        <ListItemAvatar>
          {/*  TODO  */}
          {/* <Status isOnline={is_online} isActive={is_active} /> */}
          <Status />
          {/* <AnalyticsStatus /> */}
        </ListItemAvatar>
        <ListItemText
          primary={stream_url}
          secondary={ip}
          primaryTypographyProps={{
            style: {
              width: '100%',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
            },
          }}
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  )
}
