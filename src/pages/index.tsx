import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import type { NextPage } from 'next'
import { useState } from 'react'
import { CustomFroms } from '@components/Forms/CustomForms'

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

type FormInputType = { id: string; value: string; hoge: string; fuga: { deepFuga1: string }; amount: number }

const Home: NextPage = () => {
  const [state, setState] = useState<FormInputType>()

  console.log('親コンポーネントのstate', state)

  const CustomFormParts = CustomFroms<FormInputType>(
    [
      {
        key: 'id',
        type: 'textfield',
      },
      {
        key: 'fuga',
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
            value: 'hoge1',
          },
          {
            label: 'hoge2',
            value: 'hoge2',
          },
        ],
      },
      {
        key: 'fuga.deepFuga1',
        type: 'textfield',
      },
      {
        key: 'amount',
        type: 'textfield',
        inputType: 'number',
      },
    ],
    (data) => {
      // validなデータがsubmitされたときだけ発火
      setState(data)
    }
  )

  return (
    <Container>
      <Box>{CustomFormParts}</Box>
      <Box>
        <Typography>{JSON.stringify(state)}</Typography>
      </Box>
    </Container>
  )
}

export default Home
