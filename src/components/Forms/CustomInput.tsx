import { TextField } from '@mui/material'
import { Path, UseFormRegister } from 'react-hook-form'

export const CustomInput = <T,>({
  label,
  register,
  required,
  helperText,
  error,
}: {
  label: Path<T>
  register: UseFormRegister<T>
  required?: boolean
  helperText?: string
  error?: boolean
}) => <TextField label={label} {...register(label, { required })} error={error} helperText={helperText} />
