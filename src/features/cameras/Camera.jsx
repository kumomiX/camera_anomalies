import React from 'react'
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core'

export default function Camera({ is_online, stream_url, thumb, ip, ...props }) {
  console.log(thumb)
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar src={thumb} />
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
  )
}
