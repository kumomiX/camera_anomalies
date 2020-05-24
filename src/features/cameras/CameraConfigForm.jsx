import React from 'react'
import { Formik, Form } from 'formik'
import FormField from 'components/FormField'
import { useSelector } from 'react-redux'
import { Typography, Button } from '@material-ui/core'
import styled from 'styled-components'
import Status from 'features/cameras/Status'

const StyledForm = styled(Form)`
  display: grid;
  gap: var(--spacing-s);
`

export default function CameraConfigForm(props) {
  const camera = useSelector(({ cameras }) => cameras.selected)
  return (
    <Formik initialValues={camera} enableReinitialize {...props}>
      <StyledForm>
        <Typography variant="h5" gutterBottom color="primary">
          Конфигурация камеры
        </Typography>
        <FormField label="stream_url" name="stream_url" fullWidth />

        <Button style={{ marginRight: 'auto' }} disabled>
          Сохранить
        </Button>
      </StyledForm>
    </Formik>
  )
}
