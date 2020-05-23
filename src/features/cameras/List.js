import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { List, CircularProgress } from '@material-ui/core'
import Camera from './Camera'
import { fetchCameras } from './camerasSlice'

export default function CamerasList() {
  const dispatch = useDispatch()

  const { cameras, loading } = useSelector(({ cameras }) => ({
    cameras: cameras.list,
    loading: cameras.loadingList,
  }))

  useEffect(() => {
    dispatch(fetchCameras({}))
  }, [dispatch])

  return (
    <List style={{ width: '100%' }}>
      {loading ? (
        <CircularProgress />
      ) : (
        // TODO change key
        cameras?.map((c) => <Camera key={c.uuid} {...c} />)
      )}
    </List>
  )
}
