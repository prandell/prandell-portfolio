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
      <span className="name">Pat Randell</span>
      <div className="links-container">
        <span className="projects" onClick={scrollToProjectsHandler}>
          Projects
        </span>
        <span className="about" onClick={scrollToAboutHandler}>
          About
        </span>
        <span className="github">Github</span>
        <Button>Resume</Button>
      </div>
    </Styled.NavigationBarContainer>
  )
}

export default NavigationBar
