import React, { useState } from 'react'
import {
  List,
  ListItem,
  Collapse,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import Camera from 'features/cameras/Camera'
import { Link, useLocation, matchPath } from 'react-router-dom'
import { Droppable } from 'react-beautiful-dnd'

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver && 'var(--color-subtle-background)',
})

//  {...provided.droppableProps}
export default function Template({
  dragConstraints,
  idx,
  setPosition,
  moveItem,
  template_name,
  uuid,
  cameras,
  ...props
}) {
  const [expanded, setExpanded] = useState(false)

  const location = useLocation()
  const match = matchPath(location.pathname, {
    path: '/templates/:template',
    exact: true,
    strict: false,
  })

  return (
    <Droppable droppableId={uuid}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          style={getListStyle(snapshot.isDraggingOver)}
        >
          {cameras != null ? (
            <div>
              <ListItem
                button
                component={Link}
                to={`/templates/${uuid}`}
                selected={match?.params?.template === uuid}
              >
                <ListItemText
                  primary={template_name}
                  primaryTypographyProps={{
                    variant: 'h6',
                    color: expanded ? 'primary' : 'textPrimary',
                  }}
                />
                <ListItemSecondaryAction style={{ right: 'var(--spacing-s)' }}>
                  <IconButton onClick={() => setExpanded(!expanded)}>
                    {/* <Settings /> */}
                    {expanded ? <ExpandLess /> : <ExpandMore />}
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              <Collapse
                component="li"
                in={expanded}
                timeout="auto"
                unmountOnExit
              >
                <List disablePadding style={{ overflow: 'visible' }}>
                  {cameras.map((camera, idx) => (
                    <Camera
                      {...camera}
                      idx={idx}
                      key={camera.uuid}
                      // style={{ padding: '0 0 0 var(--spacing-m)' }}
                    />
                  ))}
                </List>
              </Collapse>{' '}
            </div>
          ) : (
            <ListItem button>
              <ListItemText primary={template_name} />
            </ListItem>
          )}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}
