import React, { useEffect } from 'react'
import CameraTemplate from 'templates/Camera'
import { useSelector, useDispatch } from 'react-redux'
import { CircularProgress, Typography, IconButton } from '@material-ui/core'
import { useParams, Link } from 'react-router-dom'
import {
  fetchTemplate,
  clearSelectedTemplate,
} from 'features/templates/templatesSlice'
import { Helmet } from 'react-helmet'
import config from 'app/config'
import { UilTimes } from '@iconscout/react-unicons'

export default function TemplatePage() {
  const dispatch = useDispatch()
  const { template: templateUuid } = useParams()
  const template = useSelector(({ templates }) => templates.selected)

  // useEffect(() => {
  //   dispatch(fetchTemplate({ uuid: templateUuid }))

  //   return () => dispatch(clearSelectedTemplate())
  // }, [templateUuid, dispatch])
  return (
    <>
      {!template ? (
        <div style={{ margin: 'auto', overflow: 'hidden' }}>
          <CircularProgress />
        </div>
      ) : (
        <>
          <Helmet>
            <title>
              {template?.template_name} - {config.title}
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
                  <UilTimes />
                </IconButton>
                <div>
                  <Typography>Шаблон</Typography>
                  <Typography variant="h5" color="primary">
                    {template?.template_name}
                  </Typography>
                </div>
              </>
            }
          >
            <div>1231</div>
          </CameraTemplate>
        </>
      )}
    </>
  )
}
