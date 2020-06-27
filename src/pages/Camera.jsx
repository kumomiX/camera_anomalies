import React, { useEffect } from 'react'
import CameraTemplate from 'templates/Camera'
import { useSelector, useDispatch } from 'react-redux'
import { CircularProgress, Typography, IconButton } from '@material-ui/core'
import { useParams, Link } from 'react-router-dom'
import { fetchCamera, clearSelectedCamera } from 'features/cameras/camerasSlice'
import { Helmet } from 'react-helmet'
import config from 'app/config'
import VideoPlayer from 'features/VideoPlayer'
import CameraConfigForm from 'features/cameras/CameraConfigForm'
import CameraAnalyticsForm from 'features/cameras/CameraAnalyticsForm'
import { X } from 'react-feather'
import CameraLogs from 'features/cameras/Logs'

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
        <div style={{ margin: 'auto', overflow: 'hidden' }}>
          <CircularProgress />
        </div>
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
                <IconButton
                  style={{ margin: '0 var(--spacing-m)' }}
                  component={Link}
                  to="/"
                >
                  <X />
                </IconButton>
                <div>
                  <Typography>Камера</Typography>
                  <Typography variant="h5" color="primary">
                    {camera?.ip}
                  </Typography>
                </div>
              </>
            }
          >
            <div>
              <VideoPlayer src={camera?.embed} />
              <CameraConfigForm />
              <CameraLogs />
            </div>

            <CameraAnalyticsForm />
          </CameraTemplate>
        </>
      )}
    </>
  )
}
