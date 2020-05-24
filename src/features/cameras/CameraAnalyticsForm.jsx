import React from 'react'
import { Formik, Form } from 'formik'
import { useSelector } from 'react-redux'
import {
  Typography,
  List,
  ListItemSecondaryAction,
  ListItem,
  ListItemText,
  Divider,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core'
import styled from 'styled-components'
import names from './analytics'
import Switch from 'components/Switch'
import AnalyticsStatus from './AnalyticsStatus'

const StyledForm = styled(Form)`
  display: grid;
  gap: var(--spacing-s);
`

export default function CameraConfigForm(props) {
  const camera = useSelector(({ cameras }) => cameras.selected)
  return (
    <Formik initialValues={camera} enableReinitialize {...props}>
      <StyledForm>
        <Typography variant="h4" gutterBottom color="primary">
          Доступные аналитики
        </Typography>

        <List
          style={{
            background: 'var(--color-subtle-background)',
            borderRadius: 'var(--br-m)',
          }}
        >
          {Object.entries(camera?.issues).map(([issueName, anomaly]) => (
            <>
              <ListItem>
                <ListItemAvatar>
                  <AnalyticsStatus active anomaly={anomaly} />
                </ListItemAvatar>
                <ListItemText
                  primary={names[issueName]?.title || issueName}
                  secondary={
                    names[issueName]?.description || 'Описание отсутствует'
                  }
                />
                <ListItemSecondaryAction>
                  <Switch checked={true} color="primary" />
                </ListItemSecondaryAction>
              </ListItem>
              <Divider
                style={{ background: 'var(--color-subtle-background-darker)' }}
                variant="inset"
                component="li"
              />
            </>
          ))}
        </List>
      </StyledForm>
    </Formik>
  )
}
