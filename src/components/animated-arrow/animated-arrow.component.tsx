import React, { FC } from 'react'
import * as Styled from './animated-arrow.styles'

type AnimatedArrowProps = {
  isDown: boolean
  isActive: boolean
}
const getArrow = (isDown: boolean) => {
  return isDown ? Styled.ArrowDown : Styled.ArrowUp
}

const AnimatedArrow: FC<AnimatedArrowProps> = ({ isDown, isActive }) => {
  const Arrow = getArrow(isDown)
  return (
    <Arrow isActive={isActive}>
      <span />
      <span />
      <span />
    </Arrow>
  )
}

export default AnimatedArrow
