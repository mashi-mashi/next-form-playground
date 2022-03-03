import styled from '@emotion/styled'
import { Path, UnpackNestedValue, useForm } from 'react-hook-form'
import StyledButton from '@components/Buttons/StyledButton'
import { CustomInput } from '@components/Forms/CustomInput'
import { AnyType } from 'src/util/type'

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const useCustomForm = <T,>(
  params: {
    label: Path<T>
    required?: boolean
    type: 'string' | 'number' | 'date'
    showError?: boolean
    errorMessage?: string
  }[],
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
              <CustomInput label={p.label} register={register} required={p.required} />
              {p.showError && (errors as AnyType)[p.label] && p.errorMessage}
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
