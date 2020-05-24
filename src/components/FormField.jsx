import React from 'react'
import { Field } from 'formik'
import { TextField } from '@material-ui/core'

const InputComponent = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
  <TextField
    {...field}
    error={touched[field.name] && Boolean(errors[field.name])}
    helperText={errors[field.name] || props.helperText}
    {...props}
  />
)

const FormField = (props) => <Field component={InputComponent} {...props} />

export default FormField
