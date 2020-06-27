import React from 'react'
import { ListItem } from '@material-ui/core'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

export default function Item({ template_name, idx, ...props }) {
  return (
    <Draggable draggableId={idx.toString()} index={idx}>
      {(provided) => (
        <ListItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {template_name}
        </ListItem>
      )}
    </Draggable>
  )
}
