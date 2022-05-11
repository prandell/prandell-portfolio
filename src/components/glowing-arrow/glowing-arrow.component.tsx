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
  const [scrollIntervalId, setScrollIntervalId] = useState<any>(-1)
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
    if (scrollElementId) scrollToElement(scrollElementId)
  }
  const mouseDownHandler = () => {
    if (scrollIntervalId === -1) {
      setScrollIntervalId(
        setInterval(() => {
          scrollByAmount(containerScrollAmount)
        }, 100)
      )
    }
  }
  const mouseUpHandler = () => {
    if (scrollIntervalId !== -1) {
      clearInterval(scrollIntervalId)
      setScrollIntervalId(-1)
    }
  }
  return (
    <Styled.GlowingArrowContainer>
      <Styled.GlowingArrow
        onClick={scrollHandler}
        onTouchStart={mouseDownHandler}
        onTouchEnd={mouseUpHandler}
        onMouseDown={mouseDownHandler}
        onMouseUp={mouseUpHandler}
        isActive={isActive}
        dangerouslySetInnerHTML={{ __html: arrow }}
      ></Styled.GlowingArrow>
      {isToTop ? (
        <Styled.GlowingArrow
          onClick={scrollHandler}
          onTouchStart={mouseDownHandler}
          onTouchEnd={mouseUpHandler}
          onMouseDown={mouseDownHandler}
          onMouseUp={mouseUpHandler}
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
