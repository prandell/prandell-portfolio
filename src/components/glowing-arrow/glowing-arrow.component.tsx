import React, { FC, useEffect, useState } from 'react'
import { HOME_PAGE_ID, scrollToElement } from '../../utils/scroll.utils'
import * as Styled from './glowing-arrow.styles'

type GlowingArrowProps = {
  isDown: boolean
  isActive: boolean
  isToTop: boolean
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
  isToTop,
  isActive
}) => {
  const [scrollElementId, setScrollElementId] = useState<string>('')
  const arrow = isDown ? '&#10094' : '&#10095'
  useEffect(() => {
    if (isToTop) return setScrollElementId(HOME_PAGE_ID)
    const scrollElementId = getScrollElementId(isDown, parentId)
    if (scrollElementId) {
      setScrollElementId(scrollElementId)
    }
  }, [isToTop, isDown, parentId])

  const scrollHandler = () => scrollToElement(scrollElementId)
  return (
    <Styled.GlowingArrowContainer>
      <Styled.GlowingArrow
        onClick={scrollHandler}
        isActive={isActive}
        dangerouslySetInnerHTML={{ __html: arrow }}
      ></Styled.GlowingArrow>
      {isToTop ? (
        <Styled.GlowingArrow
          onClick={scrollHandler}
          isActive={isActive}
          dangerouslySetInnerHTML={{ __html: arrow }}
        ></Styled.GlowingArrow>
      ) : (
        false
      )}
    </Styled.GlowingArrowContainer>
  )
}

export default GlowingArrow
