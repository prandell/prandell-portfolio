import React, { FC } from 'react'
import { HOME_PAGE_ID } from '../../utils/scroll.utils'
import Hero from '../hero/hero.component'
import NavigationBar from '../navigation-bar/navigation-bar.component'
import Sidebar from '../sidebar/sidebar.component'
import * as Styled from './landing-page.styles'

const LandingPage: FC = () => {
  return (
    //Grid
    <Styled.LandingPageContainer id={HOME_PAGE_ID}>
      <NavigationBar />
      <Sidebar parentId={HOME_PAGE_ID} hasDownArrow={true} hasUpArrow={false} />
      <Hero />
    </Styled.LandingPageContainer>
  )
}

export default LandingPage
