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
import { Draggable } from 'react-beautiful-dnd'
import { UilReact } from '@iconscout/react-unicons'

// draggableId={idx.toString()} index={idx}

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',

  // change background colour if dragging
  background: isDragging && 'lightgreen',

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
  secondary,

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
          {...provided.dragHandleProps}
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
              <UilReact />
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
            {secondary}
          </ListItem>
          <Divider variant="inset" component="li" />
        </div>
      )}
    </Draggable>
  )
}
