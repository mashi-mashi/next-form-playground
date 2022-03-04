import styled from '@emotion/styled'
import { Path, UnpackNestedValue, useForm } from 'react-hook-form'
import StyledButton from '@components/Buttons/StyledButton'
import { CustomInput } from '@components/Forms/CustomInput'
import { CustomSelectBox } from '@components/Forms/CustomSelectBox'
import { AnyType } from 'src/util/type'

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

type CreateCustomFormType<T> =
  | {
      key: Path<T>
      required?: boolean
      type: 'textfield'
      showError?: boolean
      errorMessage?: string
    }
  | {
      key: Path<T>
      required?: boolean
      type: 'select'
      showError?: boolean
      errorMessage?: string
      selectValues: { label: string; value: AnyType }[]
    }

export const useCustomForm = <T,>(
  params: CreateCustomFormType<T>[],
  callback: (data: UnpackNestedValue<T>) => AnyType
) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>()

  const onSubmit = handleSubmit((data) => {
    callback(data)
  })

  return (
    <form onSubmit={onSubmit}>
      <Div>
        {params.map((p, index) => {
          return (
            <div key={index}>
              {p.type === 'textfield' && (
                <CustomInput
                  label={p.key}
                  register={register}
                  required={p.required}
                  error={p.showError && `${p.key}` in errors}
                  helperText={p.errorMessage}
                />
              )}
              {p.type === 'select' && (
                <CustomSelectBox
                  label={p.key}
                  register={register}
                  required={p.required}
                  error={p.showError && `${p.key}` in errors}
                  helperText={p.errorMessage}
                  selectValues={p.selectValues}
                />
              )}
            </div>
          )
        })}
        <StyledButton type='submit' value='submit'>
          {'submit'}
        </StyledButton>
      </Div>
    </form>
  )
}
