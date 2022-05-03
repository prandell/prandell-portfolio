import React, { FC, ReactElement } from 'react'
import * as Styled from './button-link.styles'

export interface ButtonLinkProps extends React.ComponentPropsWithoutRef<'a'> {
  children: any
}

const ButtonLink: FC<ButtonLinkProps> = ({
  children,
  ...otherProps
}: ButtonLinkProps): ReactElement => {
  return <Styled.ButtonLink {...otherProps}>{children}</Styled.ButtonLink>
}

export default ButtonLink
