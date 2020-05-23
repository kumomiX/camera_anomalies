import React from 'react'
import { Formik, Form } from 'formik'
import FormField from 'components/FormFeild'
import { useSelector } from 'react-redux'
import { Typography } from '@material-ui/core'
import styled from 'styled-components'
import Status from 'features/cameras/Status'

const StyledForm = styled(Form)`
  display: grid;
  gap: var(--spacing-s);
`

export default function CameraForm(props) {
  const camera = useSelector(({ cameras }) => cameras.selected)
  return (
    <Formik initialValues={camera} enableReinitialize {...props}>
      <StyledForm>
        <FormField label="stream_url" name="stream_url" fullWidth />
        {Object.entries(camera?.issues).map(([key, value]) => (
          <Typography>
            {key} - <Status isOnline={value} />
          </Typography>
        ))}
      </StyledForm>
    </Formik>
  )
}
