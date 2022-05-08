import React, { FC, useEffect } from 'react'
import { ABOUT_PAGE_ID } from '../../utils/scroll.utils'
import Sidebar from '../../components/sidebar/sidebar.component'
import * as Styled from './about-page.styles'
import ContactMeForm from '../../components/contact-me-form/contact-me-form.component'
import SteamTracker from '../../components/steam-tracker/steam-tracker.component'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import {
  getLatestSteamGameAsync,
  steamGameState
} from '../../recoil/steam/steam.atom'

const AboutPage: FC = () => {
  const steamGame = useRecoilValue(getLatestSteamGameAsync)
  const setSteamGame = useSetRecoilState(steamGameState)
  useEffect(() => {
    if (steamGame) setSteamGame(steamGame)
  }, [steamGame, setSteamGame])
  return (
    <Styled.AboutPageContainer id={ABOUT_PAGE_ID}>
      <Sidebar
        parentId={ABOUT_PAGE_ID}
        hasUpArrow={true}
        hasDownArrow={false}
        hasScrollToTop={true}
      />
      <Styled.TitleContainer>
        <Styled.PageBreak />
        <Styled.AboutTitle>About</Styled.AboutTitle>
        <Styled.AboutBlurb>
          I am a full-stack developer from Perth currently living in Melbourne.
          I am a fast learner and love new challenges. I am a big comic book fan
          and gamer. Below you will find my most recently played game fetched
          from the steam API!
        </Styled.AboutBlurb>
      </Styled.TitleContainer>
      <Styled.AboutContainer>
        <ContactMeForm></ContactMeForm>
        <SteamTracker />
      </Styled.AboutContainer>
    </Styled.AboutPageContainer>
  )
}

export default AboutPage
