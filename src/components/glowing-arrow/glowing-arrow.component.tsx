import React, { FC } from 'react'
import { scrollToElement } from '../../utils/scroll.utils'
import Button from '../button/button.component'
import * as Styled from './glowing-arrow.styles'

type GlowingArrowProps = {
  isDown: boolean
  isActive: boolean
  parentId: string
}

const getScrollHandler = (
  isDown: boolean,
  parentId: string
): void | (() => void) => {
  const parentElement = document.getElementById(parentId)
  const scrollElementId = isDown
    ? parentElement?.nextElementSibling?.id
    : parentElement?.previousElementSibling?.id
  if (scrollElementId) {
    return () => scrollToElement(scrollElementId)
  }
}

const GlowingArrow: FC<GlowingArrowProps> = ({
  parentId,
  isDown,
  isActive
}) => {
  const arrow = isDown ? '&#10094' : '&#10095'
  const handler = getScrollHandler(isDown, parentId) ?? (() => undefined)
  return (
    <Styled.GlowingArrowContainer>
      <Styled.GlowingArrow
        onClick={handler}
        isActive={isActive}
        dangerouslySetInnerHTML={{ __html: arrow }}
      ></Styled.GlowingArrow>
    </Styled.GlowingArrowContainer>
  )
}

export default GlowingArrow
