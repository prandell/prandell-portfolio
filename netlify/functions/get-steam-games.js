import fetch from 'node-fetch'
require('dotenv').config()

const API_ENDPOINT = `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?steamid=76561199068492201&count=3&key=${process.env.REACT_APP_STEAM_API_KEY}`

exports.handler = async (event, context) => {
  try {
    const response = await fetch(API_ENDPOINT)
    const data = await response.json()
    if (data['total_count'] > 0) {
      const achievementsUrl = `https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v1/?steamid=76561199068492201&appid=${data.response.games[0].appid}&key=${process.env.REACT_APP_STEAM_API_KEY}`
      const achievementsResponse = await fetch(achievementsUrl)
      const achievements = await achievementsResponse.json()
      return {
        statusCode: 200,
        body: JSON.stringify({ data, achievements })
      }
    }
    return {
      statusCode: 200,
      body: JSON.stringify({ data })
    }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed fetching data' })
    }
  }
}
