import React, { FC } from 'react'
// import AnimatedArrow from '../animated-arrow/animated-arrow.component'
import GlowingArrow from '../glowing-arrow/glowing-arrow.component'
import * as Styled from './sidebar.styles'

type SidebarProps = {
  hasDownArrow: boolean
  hasUpArrow: boolean
  parentId: string
}

const Sidebar: FC<SidebarProps> = ({ hasDownArrow, hasUpArrow, parentId }) => {
  return (
    <Styled.SideBarContainer>
      <GlowingArrow parentId={parentId} isActive={hasUpArrow} isDown={false} />
      <GlowingArrow parentId={parentId} isActive={hasDownArrow} isDown={true} />
    </Styled.SideBarContainer>
  )
}

export default Sidebar
