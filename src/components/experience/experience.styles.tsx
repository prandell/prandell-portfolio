import styled from 'styled-components'

export const ExperienceContainer = styled.div`
  padding: 10px;
  width: 90%;
  margin-top: 5px;
  display: grid;
  border: solid;
  border-color: var(--accent-colour-1);
  grid-template-columns: 1fr 7fr;
  grid-template-rows: 1fr 3fr;
  grid-template-areas:
    'logo organisation'
    'logo organisation';

  @media screen and (max-width: 800px) {
    width: 70vw;
    grid-template-columns: 1fr 2fr;
    scroll-snap-align: start;
  }
`
export const OrgName = styled.span`
  font-family: 'Russo One', sans serif;
  font-size: 16px;
  color: var(--primary-text-colour);
`

export const TimePeriod = styled.span`
  font-family: 'Titillium Web', sans serif;
  font-size: 14px;
  color: var(--primary-text-colour);
`
export const ExperienceTitle = styled.span`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const OrgLogo = styled.img`
  grid-area: logo;
  justify-self: center;
  align-self: center;
  width: 70%;
`

export const ExperienceDescription = styled.span`
  font-family: 'Titillium Web', sans-serif;
  font-size: 13px;
  font-weight: bold;
`

export const DescriptionContainer = styled.div`
  width: 100%;
  grid-area: organisation;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    padding: 10px;
    justify-content: center;
  }
`

export const TitlesAndIcons = styled.h2`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0px;
`
export const JobTitles = styled.span`
  width: fit-content;
  padding: 2px 8px;
  align-self: center;
  background-color: var(--accent-colour-3);
  border-radius: 5px;
  font-family: 'Titillium Web', sans-serif;
  font-size: 13px;
  font-weight: bold;
`

export const IconsContainer = styled.span``
