import React, { FC } from 'react'
import * as Styled from './landing-titles.styles'

const LandingTitles: FC = () => {
  return (
    //Grid
    <Styled.TitlesContainer>
      <Styled.SoftwareEngineer
        alt="Software Engineer"
        src="https://storage.googleapis.com/prandell-portfolio.appspot.com/landing-titles/SoftwareEngineer.png"
        url="https://storage.googleapis.com/prandell-portfolio.appspot.com/landing-titles/SoftwareEngineer.png"
      ></Styled.SoftwareEngineer>
      <Styled.ComicCollector
        alt="Comic Collector"
        src="https://storage.googleapis.com/prandell-portfolio.appspot.com/landing-titles/ComicCollector.png"
        url="https://storage.googleapis.com/prandell-portfolio.appspot.com/landing-titles/ComicCollector.png"
      ></Styled.ComicCollector>
      <Styled.CodeCrusher
        alt="Code Crusher"
        src="https://storage.googleapis.com/prandell-portfolio.appspot.com/landing-titles/CodeCrusher.png"
        url="https://storage.googleapis.com/prandell-portfolio.appspot.com/landing-titles/CodeCrusher.png"
      ></Styled.CodeCrusher>
      <Styled.Web3Surfer
        alt="Web3 Surfer"
        src="https://storage.googleapis.com/prandell-portfolio.appspot.com/landing-titles/Web3Surfer.png"
        url="https://storage.googleapis.com/prandell-portfolio.appspot.com/landing-titles/Web3Surfer.png"
      ></Styled.Web3Surfer>
      <Styled.GrandChampion
        alt="Grand Champion"
        src="https://storage.googleapis.com/prandell-portfolio.appspot.com/landing-titles/GrandChampionTitle.png"
        url="https://storage.googleapis.com/prandell-portfolio.appspot.com/landing-titles/GrandChampionTitle.png"
      ></Styled.GrandChampion>
    </Styled.TitlesContainer>
  )
}

export default LandingTitles
