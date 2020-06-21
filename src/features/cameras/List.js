import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { List, CircularProgress, Typography } from '@material-ui/core'
import Camera from './Camera'
import { fetchCameras } from './camerasSlice'
import Flex from 'components/Flex'

const styles = {
  innerDiv: { margin: 'var(--spacing-s)', overlow: 'hidden' },
}

const mockCameras = [
  {
    uuid: 12313,
    is_online: false,
    is_active: false,
    stream_url: 'http://idi.nahui',
    thumb: undefined,
    ip: '192.168.0.1',
  },
]

export default function CamerasList() {
  const dispatch = useDispatch()

  const { cameras, loading, loadingListError } = useSelector(({ cameras }) => ({
    cameras: mockCameras, // cameras.list,
    loading: cameras.loadingList,
    loadingListError: cameras.loadingListError,
  }))

  useEffect(() => {
    dispatch(fetchCameras({}))
  }, [dispatch])

  return (
    <List style={{ width: '100%' }}>
      {loading ? (
        <Flex component="li" style={styles.innerDiv}>
          <CircularProgress />
        </Flex>
      ) : !cameras ? (
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
        cameras?.map((c) => <Camera key={c.uuid} {...c} />)
      )}
    </List>
  )
}
