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
`

export const PlayingNowTitle = styled.span`
  margin-top: 10px;
  font-size: 18px;
  margin-bottom: 20px;
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
