import React, { useEffect } from 'react'
import CameraTemplate from 'templates/Camera'
import { useSelector, useDispatch } from 'react-redux'
import { CircularProgress, Typography, TextField } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import { fetchCamera, clearSelectedCamera } from 'features/cameras/camerasSlice'
import { Helmet } from 'react-helmet'
import config from 'app/config'
import VideoPlayer from 'features/VideoPlayer'
import CameraForm from 'features/cameras/CameraForm'

export default function CameraPage() {
  const dispatch = useDispatch()
  const { camera: cameraUuid } = useParams()
  const camera = useSelector(({ cameras }) => cameras.selected)

  useEffect(() => {
    dispatch(fetchCamera({ uuid: cameraUuid }))

    return () => dispatch(clearSelectedCamera())
  }, [cameraUuid, dispatch])
  return (
    <>
      {!camera ? (
        <CircularProgress style={{ margin: 'auto' }} />
      ) : (
        <>
          <Helmet>
            <title>
              {camera?.ip} - {config.title}
            </title>
          </Helmet>
          <CameraTemplate
            header={
              <>
                <Typography>Камера</Typography>
                <Typography variant="h5" color="primary">
                  {camera?.ip}
                </Typography>
              </>
            }
          >
            {/* <div style={{ maxWidth: 'var(--bp-mobile)' }}> */}

            <div>
              <VideoPlayer src={camera?.embed} />
              <CameraForm />
            </div>
            {/* </div> */}
            <Typography variant="h5">Логи</Typography>
            {/* <Typography variant="h4"></Typography> */}
          </CameraTemplate>
        </>
      )}
    </>
  )
}
