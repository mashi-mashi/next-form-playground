import { TextField } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import * as React from 'react'
import { Path, UseFormRegister } from 'react-hook-form'
import { AnyType } from 'src/util/type'

export const CustomSelectBox = <T,>({
  label,
  register,
  required,
  helperText,
  error,
  selectValues,
}: {
  label: Path<T>
  register: UseFormRegister<T>
  required?: boolean
  helperText?: string
  error?: boolean
  selectValues: {
    label: string
    value: AnyType
  }[]
}) => {
  const [state, setState] = React.useState<string>('')

  return (
    <TextField
      select
      fullWidth
      onChange={(event) => setState(event.target.value)}
      label={label}
      inputProps={register(label, {
        required,
      })}
      error={error}
      value={state}
      helperText={helperText}
    >
      {selectValues.map((option, index) => (
        <MenuItem key={index} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  )
}
