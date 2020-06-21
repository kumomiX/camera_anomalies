import React, { useState } from 'react'
import {
  List,
  ListItem,
  Collapse,
  ListItemText,
  Divider,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import Camera from 'features/cameras/Camera'
import { Settings } from 'react-feather'
import { Link, useLocation, matchPath } from 'react-router-dom'

export default function Template({ template_name, uuid, cameras, ...props }) {
  const [expanded, setExpanded] = useState(false)

  const location = useLocation()
  const match = matchPath(location.pathname, {
    path: '/templates/:template',
    exact: true,
    strict: false,
  })

  return (
    <div key={uuid}>
      {cameras != null ? (
        <div key={uuid}>
          <ListItem
            button
            key={uuid}
            component={Link}
            to={`/templates/${uuid}`}
            selected={match?.params?.template === uuid.toString()}
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
            key={uuid}
            component="li"
            in={expanded}
            timeout="auto"
            unmountOnExit
          >
            <List disablePadding>
              {cameras.map((camera) => (
                <Camera
                  {...camera}
                  key={camera.uuid}
                  style={{ padding: '0 0 0 var(--spacing-m)' }}
                />
              ))}
            </List>
          </Collapse>{' '}
        </div>
      ) : (
        <ListItem button key={uuid}>
          <ListItemText primary={template_name} />
        </ListItem>
      )}
    </div>
  )
}
