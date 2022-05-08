import React, { FC } from 'react'
import { useSetRecoilState } from 'recoil'
import { modalOpenState } from '../../recoil/modal/modal.atom'
import {
  scrollToAbout,
  scrollToExperience,
  scrollToProjects
} from '../../utils/scroll.utils'
import Button from '../button/button.component'
import * as Styled from './navigation-bar.styles'

const NavigationBar: FC = () => {
  const setModalOpen = useSetRecoilState(modalOpenState)
  const scrollToProjectsHandler = () => scrollToProjects(1)
  const scrollToExperienceHandler = () => scrollToExperience(2)
  const scrollToAboutHandler = () => scrollToAbout(3)

  const onResumeClick = () => {
    setModalOpen(true)
  }

  return (
    //Grid
    <Styled.NavigationBarContainer>
      <Styled.NameTitle>Pat Randell</Styled.NameTitle>
      <Styled.NavLinksContainer>
        <Styled.NavLink onClick={scrollToProjectsHandler}>
          Projects
        </Styled.NavLink>
        <Styled.NavLink onClick={scrollToExperienceHandler}>
          Experience
        </Styled.NavLink>
        <Styled.NavLink onClick={scrollToAboutHandler}>About</Styled.NavLink>
        <Button onClick={onResumeClick}>Resume</Button>
      </Styled.NavLinksContainer>
    </Styled.NavigationBarContainer>
  )
}

export default NavigationBar
