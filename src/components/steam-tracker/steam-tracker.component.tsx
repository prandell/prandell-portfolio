import React, { FC, useEffect, useState } from 'react'
import * as Styled from './steam-tracker.styles'
import STEAM_DATA from '../../resources/steam-api-response.json'

interface ISteamGame {
  appId: number
  name: string
  playtime2Weeks: number
  playtimeAllTime: number
  bannerUrl: string
  heroUrl: string
}

const SteamTracker: FC = () => {
  const [{ appId, name, playtime2Weeks, playtimeAllTime, bannerUrl }, setGame] =
    useState<ISteamGame>({
      appId: 0,
      name: '',
      playtime2Weeks: 0,
      playtimeAllTime: 0,
      bannerUrl: '',
      heroUrl: ''
    })

  useEffect(() => {
    const games = STEAM_DATA['games']
    const recentGame = games[0]
    const game: ISteamGame = {
      appId: recentGame['appid'],
      name: recentGame['name'],
      playtime2Weeks: recentGame['playtime_2weeks'],
      playtimeAllTime: recentGame['playtime_forever'],
      bannerUrl: `https://cdn.cloudflare.steamstatic.com/steam/apps/${recentGame['appid']}/header.jpg`,
      heroUrl: `https://cdn.cloudflare.steamstatic.com/steam/apps/${recentGame['appid']}/hero_capsule.jpg`
    }
    setGame(game)
  }, [])

  return (
    <Styled.SteamTrackerContainer>
      <Styled.PlayingNowTitle>Playing Now</Styled.PlayingNowTitle>
      <Styled.GameBanner src={bannerUrl} alt={name} />
      <Styled.GameStats></Styled.GameStats>
    </Styled.SteamTrackerContainer>
  )
}

export default SteamTracker
