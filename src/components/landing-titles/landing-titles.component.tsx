import React, { FC, Fragment } from 'react'
import * as Styled from './landing-titles.styles'

const LandingTitles: FC = () => {
  return (
    //Grid
    <Styled.TitlesContainer>
      <Styled.SoftwareEngineer
        alt="software engineer"
        src="/SoftwareEngineer.png"
      ></Styled.SoftwareEngineer>
      <Styled.ComicCollector
        alt="comic collector"
        src="/ComicCollector.png"
      ></Styled.ComicCollector>
      <Styled.CodeCrusher
        alt="code crusher"
        src="/CodeCrusher.png"
      ></Styled.CodeCrusher>
      <Styled.Web3Surfer
        alt="bounty hunter"
        src="/Web3Surfer.png"
      ></Styled.Web3Surfer>
      <Styled.GrandChampion
        alt="grand champion"
        src="/GrandChampionTitle.png"
      ></Styled.GrandChampion>
    </Styled.TitlesContainer>
  )
}

export default LandingTitles
