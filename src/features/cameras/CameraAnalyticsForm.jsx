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

export default function CameraConfigForm(props) {
  const camera = useSelector(({ cameras }) => cameras.selected)
  return (
    <Formik initialValues={camera} enableReinitialize {...props}>
      <StyledForm>
        <Typography variant="h4" gutterBottom>
          Доступные аналитики
        </Typography>

        {Object.entries(camera?.issues).map(([key, value]) => (
          <Typography>
            {key} - <Status isOnline={value} />
          </Typography>
        ))}
      </StyledForm>
    </Formik>
  )
}
