import React, { FC } from 'react'
// import AnimatedArrow from '../animated-arrow/animated-arrow.component'
import GlowingArrow from '../glowing-arrow/glowing-arrow.component'
import * as Styled from './sidebar.styles'

type SidebarProps = {
  hasDownArrow: boolean
  hasUpArrow: boolean
  hasScrollToTop: boolean
  parentId: string
}

const Sidebar: FC<SidebarProps> = ({
  hasDownArrow,
  hasUpArrow,
  hasScrollToTop,
  parentId
}) => {
  return (
    <Styled.SideBarContainer>
      <GlowingArrow
        parentId={parentId}
        isActive={hasScrollToTop}
        isToTop={true}
        isDown={false}
      />
      <GlowingArrow
        parentId={parentId}
        isActive={hasUpArrow}
        isToTop={false}
        isDown={false}
      />
      <GlowingArrow
        parentId={parentId}
        isActive={hasDownArrow}
        isToTop={false}
        isDown={true}
      />
    </Styled.SideBarContainer>
  )
}

export default Sidebar
