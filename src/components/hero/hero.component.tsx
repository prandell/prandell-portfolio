import React, { FC } from 'react'
import LandingTitles from '../landing-titles/landing-titles.component'
import ThreeOctane from '../threejs-octane/Octane'
import * as Styled from './hero.styles'

const Hero: FC = () => {
  return (
    <Styled.HeroContainer>
      <Styled.HeroSubtitle>I'm a ...</Styled.HeroSubtitle>
      <LandingTitles />
      <Styled.HeroOctaneContainer id="canvas-container">
        <ThreeOctane />
      </Styled.HeroOctaneContainer>
    </Styled.HeroContainer>
  )
}

export default Hero
