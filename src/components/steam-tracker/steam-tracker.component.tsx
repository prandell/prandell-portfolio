import React, { FC } from 'react'
import * as Styled from './steam-tracker.styles'
import { useRecoilValue } from 'recoil'
import { ISteamGame, steamGameState } from '../../recoil/steam/steam.atom'

const SteamTracker: FC = () => {
  const {
    name,
    playtime2Weeks,
    playtimeAllTime,
    bannerUrl,
    achievementCount,
    achievementTotal
  } = useRecoilValue<ISteamGame>(steamGameState)

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
