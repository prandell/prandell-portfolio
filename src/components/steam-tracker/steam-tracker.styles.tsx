import styled from 'styled-components'

interface ProgressProps {
  achievementCount: number
  achievementTotal: number
}

export const SteamTrackerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  width: 42%;

  h2 {
    margin: 10px 0;
  }

  @keyframes pulse {
    0% {
      background: rgba(255, 255, 255, 0.3);
      box-shadow: inset 0px 0px 10px 2px rgba(255, 0, 0, 0.5),
        0px 0px 5px 2px rgba(255, 0, 0, 0.3);
    }
    100% {
      background: rgba(255, 255, 255, 1);
      box-shadow: inset 0px 0px 10px 2px rgba(255, 0, 0, 0.5),
        0px 0px 15px 2px rgba(255, 0, 0, 1);
    }
  }

  @-webkit-keyframes pulse {
    0% {
      background: rgba(255, 255, 255, 0.3);
      box-shadow: inset 0px 0px 10px 2px rgba(255, 0, 0, 0.5),
        0px 0px 5px 2px rgba(255, 0, 0, 0.3);
    }
    100% {
      background: rgba(255, 255, 255, 1);
      box-shadow: inset 0px 0px 10px 2px rgba(255, 0, 0, 0.5),
        0px 0px 15px 2px rgba(255, 0, 0, 1);
    }
  }

  @-moz-keyframes pulse {
    0% {
      background: rgba(255, 255, 255, 0.3);
      box-shadow: inset 0px 0px 10px 2px rgba(255, 0, 0, 0.5),
        0px 0px 5px 2px rgba(255, 0, 0, 0.3);
    }
    100% {
      background: rgba(255, 255, 255, 1);
      box-shadow: inset 0px 0px 10px 2px rgba(255, 0, 0, 0.5),
        0px 0px 15px 2px rgba(255, 0, 0, 1);
    }
  }
`

export const LiveBlinkerList = styled.ul`
  display: inline-flex;
  padding-left: 20px;
  margin: 0px;
`

export const LiveBlinker = styled.li`
  display: block;
  float: left;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: inset 0px 0px 10px 2px rgba(255, 0, 0, 0.5),
    0px 0px 10px 2px rgba(255, 0, 0, 0.3);
  -webkit-animation: pulse 1s alternate infinite;
  -moz-animation: pulse 1s alternate infinite;
  animation: pulse 1s alternate infinite;
`

export const PlayingNowTitle = styled.span`
  margin-top: 10px;
  font-size: 18px;
  margin-bottom: 25px;
`
export const GameBanner = styled.img`
  border: solid;
  border-color: var(--accent-colour-3);
  width: 80%;
`

export const GameStats = styled.span`
  width: 80%;
  font-family: 'Titillium Web', sans serif;
  color: var(--primary-text-colour);
  font-size: 14px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const GameStat = styled.span`
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  > :last-child {
    color: var(--accent-colour-2);
  }
`

export const ProgressBarContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 10px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 5px var(--accent-colour-3);
`

export const ProgressBar = styled.div<ProgressProps>`
  height: 100%;
  width: ${({ achievementCount, achievementTotal }: ProgressProps) =>
    (100 * achievementCount) / achievementTotal}%;
  content: '';
  background-color: var(--accent-colour-3);
  border-radius: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: sans-serif;
`
