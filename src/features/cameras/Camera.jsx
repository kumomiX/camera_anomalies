import React from 'react'
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core'
import { Link, useLocation, matchPath } from 'react-router-dom'
import Status from './Status'
import AnalyticsStatus from './AnalyticsStatus'
import { Draggable } from 'react-beautiful-dnd'
import { UilDraggabledots } from '@iconscout/react-unicons'

// draggableId={idx.toString()} index={idx}

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  // change background colour if dragging
  background: isDragging && 'var(--color-secondary)',
  color: isDragging && 'var(--color-secondary-contrast)',
  // styles we need to apply on draggables
  ...draggableStyle,
})

export default function Camera({
  uuid,
  is_online,
  is_active,
  stream_url,
  thumb,
  ip,
  idx,
  ...props
}) {
  const location = useLocation()

  const match = matchPath(location.pathname, {
    path: '/cameras/:camera',
    exact: true,
    strict: false,
  })

  return (
    <Draggable draggableId={uuid} index={idx}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style,
          )}
        >
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
            <ListItemSecondaryAction style={{ right: 'var(--spacing-s)' }}>
              <IconButton {...provided.dragHandleProps}>
                <UilDraggabledots />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider variant="inset" component="li" />
        </div>
      )}
    </Draggable>
  )
}
