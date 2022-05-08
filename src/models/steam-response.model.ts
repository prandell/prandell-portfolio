export interface SteamApiResponse {
  data: { response: SteamRecentGamesReponse }
  achievements: SteamAchievementsResponse
}

export interface SteamRecentGamesReponse {
  total_count: number
  games?: Array<SteamGameResponse>
}

export interface SteamAchievementsResponse {
  playerstats: {
    steamID: string
    gameName: string
    achievements: Array<SteamAchievementResponse>
    success: boolean
  }
}

export interface SteamAchievementResponse {
  apiname: string
  achieved: number
  unlocktime: number
}

export interface SteamGameResponse {
  appid: number
  name: string
  playtime_2weeks: number
  playtime_forever: number
  img_icon_url: string
  playtime_windows_forever: number
  playtime_mac_forever: number
  playtime_linux_forever: number
}
