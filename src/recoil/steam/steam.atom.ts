import { atom, selector } from 'recoil'
import {
  SteamAchievementResponse,
  SteamApiResponse
} from '../../models/steam-response.model'
import { getRecentGames } from '../../utils/firebase.utils'

export interface ISteamGame {
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
  appId: 252950,
  name: 'Rocket League',
  playtime2Weeks: 120,
  playtimeAllTime: 37451,
  bannerUrl: `https://cdn.cloudflare.steamstatic.com/steam/apps/252950/header.jpg`,
  heroUrl: `https://cdn.cloudflare.steamstatic.com/steam/apps/252950/hero_capsule.jpg`,
  achievementCount: 64,
  achievementTotal: 88
}

export const steamGameState = atom({
  key: 'steamGame',
  default: initialState
})

const handleSteamApiResponse = (
  response: SteamApiResponse
): ISteamGame | undefined => {
  if (response.recentgames.total_count > 0) {
    const games = response.recentgames.games
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
          response?.achievements?.playerstats?.achievements?.reduce(
            (total: number, achievement: SteamAchievementResponse) =>
              total + achievement.achieved,
            0
          ),
        achievementTotal:
          response?.achievements?.playerstats?.achievements?.length
      }
      return game
    }
  }
}

export const getLatestSteamGameAsync = selector({
  key: 'steamGameAsync',
  get: async () => {
    const response = await getRecentGames()
      .then((result: any) => {
        // Read result of the Cloud Function.
        const data: SteamApiResponse = result.data
        return data
      })
      .catch((error) => {
        const code = error.code
        const message = error.message
        console.log(
          `Failed to get Steam games - Error(${code}). Message: ${message}`
        )
      })
    if (response) {
      return handleSteamApiResponse(response)
    }
  }
})
