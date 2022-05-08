import styled from 'styled-components'

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
  width: 80%;
`

export const GameStats = styled.span`
  width: 100%;
  font-family: 'Titillium Web', sans serif;
  color: var(--primary-text-colour);
  font-size: 14px;
`
