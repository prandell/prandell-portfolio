import React, { FC, Fragment } from 'react'
import * as Styled from './landing-titles.styles'

const LandingTitles: FC = () => {
  return (
    //Grid
    <Styled.TitlesContainer>
      <Styled.SoftwareEngineer
        alt="Software Engineer"
        src="/SoftwareEngineer.png"
      ></Styled.SoftwareEngineer>
      <Styled.ComicCollector
        alt="Comic Collector"
        src="/ComicCollector.png"
      ></Styled.ComicCollector>
      <Styled.CodeCrusher
        alt="Code Crusher"
        src="/CodeCrusher.png"
      ></Styled.CodeCrusher>
      <Styled.Web3Surfer
        alt="Web3 Surfer"
        src="/Web3Surfer.png"
      ></Styled.Web3Surfer>
      <Styled.GrandChampion
        alt="Grand Champion"
        src="/GrandChampionTitle.png"
      ></Styled.GrandChampion>
    </Styled.TitlesContainer>
  )
}

export default LandingTitles
