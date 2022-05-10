import React, { FC, useEffect, useState } from 'react'
import {
  HOME_PAGE_ID,
  scrollToElement,
  scrollByAmount
} from '../../utils/scroll.utils'
import * as Styled from './glowing-arrow.styles'

type GlowingArrowProps = {
  isDown: boolean
  isActive: boolean
  isToTop: boolean
  parentId?: string
  scrollAmount?: number
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
  isActive,
  scrollAmount
}) => {
  const [scrollElementId, setScrollElementId] = useState<string>('')
  const [containerScrollAmount, setContainerScrollAmount] = useState<number>(0)
  const arrow = isDown ? '&#10094' : '&#10095'
  useEffect(() => {
    if (isToTop) return setScrollElementId(HOME_PAGE_ID)
    if (parentId) {
      const scrollElId = getScrollElementId(isDown, parentId)
      if (scrollElId) {
        setScrollElementId(scrollElId)
      }
    } else if (scrollAmount) {
      setContainerScrollAmount(scrollAmount)
    }
  }, [isToTop, isDown, parentId, scrollAmount])

  const scrollHandler = () => {
    if (scrollAmount) scrollByAmount(containerScrollAmount)
    else scrollToElement(scrollElementId)
  }
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
