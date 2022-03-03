import { Button as MuiButton, styled, SvgIcon } from '@mui/material'
import { MouseEventHandler } from 'react'

type P = {
  id?: string,
  label?: string,
  Icon?: typeof SvgIcon,
  StartIcon?: typeof SvgIcon,
  EndIcon?: typeof SvgIcon,
  width?: number | string,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  variant?: 'text' | 'outlined' | 'contained', // 初期値はcontained
  disabled?: boolean,
  full?: boolean, // flex=1
  fontSize?: number,
  borderRadius?: number,
  height?: number | string,
  running?: boolean,
  radius?: number,
  color?: 'primary' | 'secondary',
  fontWeight?: number
}

const StyledButton = styled(MuiButton)<P>`
  min-width: 0;
  width: ${(props) => (props.width ? props.width : undefined)};
  padding-top: 8;
  padding-bottom: 8;
  padding-left: ${(props) => (props.label ? 14 : 4)};
  padding-right: ${(props) => (props.label ? 14 : 4)};
  height: ${(props) => (props.height ? props.height : 32)};
  flex: ${(props) => (props.full ? 1 : undefined)};
  font-size: ${(props) => (props.fontSize ? props.fontSize : undefined)};
  border-radius: ${(props) => (props.radius ? props.radius : undefined)};
  font-weight: ${(props) => props.fontWeight ?? 600} !important;
`

export default StyledButton
