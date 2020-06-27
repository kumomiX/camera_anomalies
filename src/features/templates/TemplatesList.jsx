import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { List, CircularProgress, Typography } from '@material-ui/core'
import Template from './Template'
import { fetchTemplates } from './templatesSlice'
import Flex from 'components/Flex'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { findIndex } from './findIndex'
import { reorderCameras, moveCameraToTemplate } from './templatesSlice'
import move from 'array-move'
import Item from './Item'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const styles = {
  innerDiv: { margin: 'var(--spacing-s)', overlow: 'hidden' },
}

const mockCameras = [
  {
    uuid: 1787872313,
    is_online: false,
    is_active: false,
    stream_url: 'http://idi.nahui',
    thumb: undefined,
    ip: '192.168.0.1',
  },
  {
    uuid: 21313434331231,
    is_online: false,
    is_active: false,
    stream_url: 'http://idi.suda',
    thumb: undefined,
    ip: '192.168.0.2',
  },
]

const mockCamerasTwo = [
  {
    uuid: 123123123131334343,
    is_online: false,
    is_active: false,
    stream_url: 'http://idi.nahui',
    thumb: undefined,
    ip: '192.168.0.3',
  },
  {
    uuid: 2131312312313232432423431,
    is_online: false,
    is_active: false,
    stream_url: 'http://idi.suda',
    thumb: undefined,
    ip: '192.168.0.4',
  },
]

export default function TemplatesList() {
  const dispatch = useDispatch()
  const { list: templates, loading, loadingListError } = useSelector(
    ({ templates }) => templates,
  )
  // useEffect(() => {
  //   dispatch(fetchTemplates({}))
  // }, [dispatch])

  function onDragEnd(result) {
    console.log(result)
    const { source, destination } = result
    if (!result.destination) {
      return
    }

    // reorder
    if (source.droppableId === destination.droppableId) {
      dispatch(
        reorderCameras({
          templateUuid: destination.droppableId,
          newIdx: destination.index,
          oldIdx: source.index,
        }),
      )
    } else {
      dispatch(
        moveCameraToTemplate({
          sourceTemplateUuid: source.droppableId,
          destinationTemplateUuid: destination.droppableId,
          cameraUuid: result.draggableId,
          newIdx: destination.index,
          oldIdx: source.index,
        }),
      )
    }

    // dispatch(
    //   reorderTemplatesList([result.source.index, result.destination.index]),
    // )
  }

  return (
    <List style={{ width: '100%', flex: 1, overflow: 'visible' }}>
      <DragDropContext onDragEnd={onDragEnd} onDragStart={() => false}>
        {templates?.map((t, idx) => (
          <Template key={idx} idx={idx} {...t} />
        ))}
      </DragDropContext>
    </List>
  )
}

/* {loading ? (
        <Flex component="li" style={styles.innerDiv}>
          <CircularProgress />
        </Flex>
      ) : !templates ? (
        <Flex
          flexDirection="column"
          alignItems="center"
          style={{
            ...styles.innerDiv,
            backgroundColor: 'var(--color-subtle-background)',
            padding: 'var(--spacing-s)',
            borderRadius: 'var(--br-m)',
          }}
          component="li"
        >
          <span style={{ fontSize: 32 }} role="img" aria-label="dead">
            😵
          </span>
          <Typography align="center" color="error">
            При загрузке списка камер произошла ошибка
          </Typography>
        </Flex>
      ) : (
        // TODO change key
        templates?.map((c) => <Template key={c.uuid} {...c} />)
      )} */
