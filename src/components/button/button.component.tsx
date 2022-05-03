import React, { FC, ReactElement } from 'react'
import * as Styled from './button.styles'

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  children: any
}

const Button: FC<ButtonProps> = ({
  children,
  ...otherProps
}: ButtonProps): ReactElement => {
  return <Styled.Button {...otherProps}>{children}</Styled.Button>
}

export default Button
