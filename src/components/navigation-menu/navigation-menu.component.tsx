import React, { FC } from 'react'
import { useSetRecoilState } from 'recoil'
import { modalOpenState } from '../../recoil/modal/modal.atom'
import {
  HOME_PAGE_ID,
  scrollToAbout,
  scrollToElement,
  scrollToExperience,
  scrollToProjects
} from '../../utils/scroll.utils'
import * as Styled from './navigation-menu.styles'
import { MenuItem } from '@szhsin/react-menu'
import '@szhsin/react-menu/dist/index.css'
import '@szhsin/react-menu/dist/theme-dark.css'
import '@szhsin/react-menu/dist/transitions/slide.css'
import { MenuIcon } from '../icon-svgs/icon-svgs.styles'
import GlowingArrow from '../glowing-arrow/glowing-arrow.component'

const NavigationMenu: FC = () => {
  const setModalOpen = useSetRecoilState(modalOpenState)
  const scrollToProjectsHandler = () => scrollToProjects(1)
  const scrollToExperienceHandler = () => scrollToExperience(2)
  const scrollToTopHandler = () => scrollToElement(HOME_PAGE_ID)
  const scrollToAboutHandler = () => scrollToAbout(3)

  const onResumeClick = () => {
    setModalOpen(true)
  }

  return (
    <>
      <Styled.NavigationMenuContainer>
        <Styled.NameTitle onClick={scrollToTopHandler}>
          Pat Randell
        </Styled.NameTitle>
        <div>
          <Styled.NavMenu
            menuButton={
              <Styled.NavMenuButton>
                <MenuIcon />
              </Styled.NavMenuButton>
            }
            transition
            theming="dark"
            direction="left"
          >
            <MenuItem onClick={scrollToProjectsHandler}>Projects</MenuItem>
            <MenuItem onClick={scrollToExperienceHandler}>Experience</MenuItem>
            <MenuItem onClick={scrollToAboutHandler}>About</MenuItem>
            <MenuItem onClick={onResumeClick}>Resume</MenuItem>
          </Styled.NavMenu>
        </div>
      </Styled.NavigationMenuContainer>
      <Styled.ArrowContainer>
        <GlowingArrow
          scrollAmount={-100}
          isActive={true}
          isToTop={false}
          isDown={false}
        />
        <GlowingArrow
          scrollAmount={100}
          isActive={true}
          isToTop={false}
          isDown={true}
        />
      </Styled.ArrowContainer>
    </>
  )
}

export default NavigationMenu
