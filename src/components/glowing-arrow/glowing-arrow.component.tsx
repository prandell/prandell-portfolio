import React, { FC, useEffect, useState } from 'react'
import { scrollToElement } from '../../utils/scroll.utils'
import * as Styled from './glowing-arrow.styles'

type GlowingArrowProps = {
  isDown: boolean
  isActive: boolean
  parentId: string
}

const getScrollElementId = (
  isDown: boolean,
  parentId: string
): string | undefined => {
  const parentElement = document.getElementById(parentId)
  return isDown
    ? parentElement?.nextElementSibling?.id
    : parentElement?.previousElementSibling?.id
}

const GlowingArrow: FC<GlowingArrowProps> = ({
  parentId,
  isDown,
  isActive
}) => {
  const [scrollElementId, setScrollElementId] = useState<string>('')
  const arrow = isDown ? '&#10094' : '&#10095'
  useEffect(() => {
    const scrollElementId = getScrollElementId(isDown, parentId)
    if (scrollElementId) {
      setScrollElementId(scrollElementId)
    }
  }, [isDown, parentId])

  const scrollHandler = () => scrollToElement(scrollElementId)
  return (
    <Styled.GlowingArrowContainer>
      <Styled.GlowingArrow
        onClick={scrollHandler}
        isActive={isActive}
        dangerouslySetInnerHTML={{ __html: arrow }}
      ></Styled.GlowingArrow>
    </Styled.GlowingArrowContainer>
  )
}

export default GlowingArrow
