import React, { FC } from 'react'
import { scrollToAbout, scrollToProjects } from '../../utils/scroll.utils'
import Button from '../button/button.component'
import * as Styled from './navigation-bar.styles'

const NavigationBar: FC = () => {
  const scrollToProjectsHandler = () => scrollToProjects(1)
  const scrollToAboutHandler = () => scrollToAbout(2)

  return (
    //Grid
    <Styled.NavigationBarContainer>
      <Styled.NameTitle>Pat Randell</Styled.NameTitle>
      <Styled.NavLinksContainer>
        <Styled.NavLink onClick={scrollToProjectsHandler}>
          Projects
        </Styled.NavLink>
        <Styled.NavLink>Experience</Styled.NavLink>
        <Styled.NavLink className="about" onClick={scrollToAboutHandler}>
          About
        </Styled.NavLink>
        <Button>Resume</Button>
      </Styled.NavLinksContainer>
    </Styled.NavigationBarContainer>
  )
}

export default NavigationBar
