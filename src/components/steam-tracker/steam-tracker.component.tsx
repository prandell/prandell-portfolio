import React, { FC, useEffect, useState } from 'react'
import * as Styled from './steam-tracker.styles'
import STEAM_DATA from '../../resources/steam-api-response.json'
import {
  SteamAchievementResponse,
  SteamApiResponse
} from '../../models/steam-response.model'

interface ISteamGame {
  appId: number
  name: string
  playtime2Weeks: number
  playtimeAllTime: number
  bannerUrl: string
  heroUrl: string
  achievementCount: number
  achievementTotal: number
}

const initialState: ISteamGame = {
  appId: 0,
  name: 'N/A',
  playtime2Weeks: 0,
  playtimeAllTime: 0,
  bannerUrl: '',
  heroUrl: '',
  achievementCount: 0,
  achievementTotal: 0
}

const SteamTracker: FC = () => {
  const [
    {
      name,
      playtime2Weeks,
      playtimeAllTime,
      bannerUrl,
      achievementCount,
      achievementTotal
    },
    setGame
  ] = useState<ISteamGame>(initialState)

  useEffect(() => {
    const steamResponse: SteamApiResponse = STEAM_DATA
    if (steamResponse.data?.response?.total_count > 0) {
      const games = steamResponse.data.response.games
      if (games && games.length > 0) {
        const recentGame = games[0]
        const game: ISteamGame = {
          appId: recentGame['appid'],
          name: recentGame['name'],
          playtime2Weeks: recentGame['playtime_2weeks'],
          playtimeAllTime: recentGame['playtime_forever'],
          bannerUrl: `https://cdn.cloudflare.steamstatic.com/steam/apps/${recentGame['appid']}/header.jpg`,
          heroUrl: `https://cdn.cloudflare.steamstatic.com/steam/apps/${recentGame['appid']}/hero_capsule.jpg`,
          achievementCount:
            steamResponse.achievements.playerstats.achievements.reduce(
              (total: number, achievement: SteamAchievementResponse) =>
                total + achievement.achieved,
              0
            ),
          achievementTotal:
            steamResponse.achievements.playerstats.achievements.length
        }
        setGame(game)
      }
    }
  }, [])

  return (
    <Styled.SteamTrackerContainer>
      <Styled.PlayingNowTitle>
        Playing Now
        <Styled.LiveBlinkerList>
          <Styled.LiveBlinker />
        </Styled.LiveBlinkerList>
      </Styled.PlayingNowTitle>
      <Styled.GameBanner src={bannerUrl} alt={name} />
      <Styled.GameStats>
        <Styled.GameStat>
          <span>Playtime (2 Weeks):</span>
          <span>{`${Math.round(playtime2Weeks / 60)} Hrs`}</span>
        </Styled.GameStat>
        <Styled.GameStat>
          <span>Playtime (All time):</span>
          <span>{`${Math.round(playtimeAllTime / 60)} Hrs`}</span>
        </Styled.GameStat>
        <Styled.GameStat>
          <span>Achievements:</span>
          <span>{`${achievementCount}/${achievementTotal}`}</span>
        </Styled.GameStat>
        <Styled.ProgressBarContainer>
          <Styled.ProgressBar
            achievementCount={achievementCount}
            achievementTotal={achievementTotal}
          />
        </Styled.ProgressBarContainer>
      </Styled.GameStats>
    </Styled.SteamTrackerContainer>
  )
}

export default SteamTracker
