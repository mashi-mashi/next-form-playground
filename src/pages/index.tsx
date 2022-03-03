import styled from '@emotion/styled'
import type { NextPage } from 'next'
import { useState } from 'react'
import { useCustomForm } from '@hooks/useCustomForm'

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

type FormInputType = { id: string; value: string; hoge: string; fuga: string }

const Home: NextPage = () => {
  const [state, setState] = useState<FormInputType>()

  console.log('親コンポーネントのstate', state)

  const CustomFormParts = useCustomForm<FormInputType>(
    [
      {
        label: 'id',
        type: 'string',
      },
      {
        label: 'value',
        type: 'string',
        required: true,
        showError: true,
        errorMessage: 'バリデーションエラーだよ',
      },
      {
        label: 'hoge',
        type: 'string',
      },
      {
        label: 'fuga',
        type: 'string',
      },
    ],
    (data) => {
      setState(data)
      // APIリクエストとかやるならこのへん
    }
  )

  return <Container>{CustomFormParts}</Container>
}

export default Home
