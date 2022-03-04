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

type FormInputType = { id: string; value: string; hoge: string; fuga: { deepFuga1: string } }

const Home: NextPage = () => {
  const [state, setState] = useState<FormInputType>()

  console.log('親コンポーネントのstate', state)

  const CustomFormParts = useCustomForm<FormInputType>(
    [
      {
        key: 'id',
        type: 'textfield',
      },
      {
        key: 'value',
        type: 'textfield',
        required: true,
        showError: true,
        errorMessage: 'バリデーションエラーだよ',
      },
      {
        key: 'hoge',
        type: 'select',
        selectValues: [
          {
            label: 'hoge1',
            value: 100,
          },
          {
            label: 'hoge2',
            value: 200,
          },
        ],
      },
      {
        key: 'fuga.deepFuga1',
        type: 'textfield',
      },
    ],
    (data) => {
      // validなデータがsubmitされたときだけ発火
      setState(data)
    }
  )

  return <Container>{CustomFormParts}</Container>
}

export default Home
