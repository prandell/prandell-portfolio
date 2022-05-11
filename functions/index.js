const functions = require('firebase-functions')
const cors = require('cors')({ origin: true })
const axios = require('axios')
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

exports.getRecentGames = functions.https.onRequest((request, response) => {
  try {
    const API_ENDPOINT = `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?steamid=${process.env.REACT_APP_STEAM_USER_ID}&count=3&key=${process.env.REACT_APP_STEAM_API_KEY}`
    cors(request, response, () => {
      axios.get(API_ENDPOINT).then(async (r) => {
        const data = r.data
        if (data.response['total_count'] > 0) {
          data.response['games'].sort((a, b) => {
            if (a['playtime_2weeks'] > b['playtime_2weeks']) return -1
            else if (a['playtime_2weeks'] < b['playtime_2weeks']) return 1
            else return 0
          })
          const achievementsUrl = `https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v1/?steamid=${process.env.REACT_APP_STEAM_USER_ID}&appid=${data.response.games[0].appid}&key=${process.env.REACT_APP_STEAM_API_KEY}`
          const achievementsResponse = await axios.get(achievementsUrl)
          const achievements = achievementsResponse.data
          console.log({
            data: { recentgames: data.response, achievements }
          })
          return response.send({
            data: { recentgames: data.response, achievements }
          })
        }
        return response.send({ data })
      })
    })
  } catch (error) {
    console.log(error)
    response.sendStatus(error)
  }
})
