import React from 'react'
import { Icon, IGlyphs } from 'src/components/Icons'
import styled from 'styled-components'
import {
  Button as RebassButton,
  ButtonProps as RebassButtonProps,
} from 'rebass'

import theme, { ButtonVariants } from 'src/themes/styled.theme'

export const BaseButton = styled(RebassButton)`
  min-height: ${props => props.theme.buttons.height};
  border-radius: ${props => props.theme.radii[1] + 'px'};
  display: flex;
  flex: none;
  align-self: center;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  word-break: keep-all;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`
export const Label = styled.span`
  text-transform: uppercase;
  text-decoration: none;
  display: block;
  flex: 0 0 auto;
  line-height: inherit;
  color: inherit;
  align-self: center;
`

// extend to allow any default button props (e.g. onClick) to also be passed
export interface IBtnProps extends React.ButtonHTMLAttributes<HTMLElement> {
  icon?: keyof IGlyphs
  disabled?: boolean
  variant?: ButtonVariants
}

type BtnProps = IBtnProps & RebassButtonProps

export const Button = (props: BtnProps) => (
  <BaseButton {...props}>
    <span style={{ marginRight: '8px' }}>
      {props.icon && <Icon glyph={props.icon} />}
    </span>
    <Label>{props.children}</Label>
  </BaseButton>
)

Button.defaultProps = {
  className: 'button',
  variant: 'primary',
  theme,
}
