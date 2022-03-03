import { TextField } from '@mui/material'
import { Path, UseFormRegister } from 'react-hook-form'

export const CustomInput = <T,>({
  label,
  register,
  required,
}: {
  label: Path<T>
  register: UseFormRegister<T>
  required?: boolean
}) => <TextField label={label} {...register(label, { required })} />
