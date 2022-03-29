import { TextField } from '@mui/material'
import { Path, UseFormRegister } from 'react-hook-form'

export const CustomInput = <T,>({
  label,
  register,
  required,
  helperText,
  error,
  inputType,
}: {
  label: Path<T>
  register: UseFormRegister<T>
  required?: boolean
  helperText?: string
  error?: boolean
  inputType?: React.InputHTMLAttributes<unknown>['type']
}) => (
  <TextField
    label={label}
    {...register(label, { required })}
    error={error}
    helperText={error && helperText}
    type={inputType}
    InputLabelProps={{ shrink: true }}
  />
)
