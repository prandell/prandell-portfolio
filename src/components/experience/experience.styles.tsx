import styled from 'styled-components'

export const ExperienceContainer = styled.div`
  padding: 10px;
  width: 90%;
  margin: 1% 0px;
  display: grid;
  border: solid;
  border-color: var(--accent-colour-1);
  grid-template-columns: 1fr 7fr;
  grid-template-rows: 1fr;
  grid-template-areas: 'logo organisation';

  @media screen and (max-width: 800px), (max-height: 650px) {
    width: 70vw;
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr 2fr;
    grid-template-areas: 'logo' 'organisation';
    scroll-snap-align: start;
  }
`
export const OrgName = styled.span`
  font-family: 'Russo One', sans serif;
  font-size: 16px;
  color: var(--primary-text-colour);
  @media screen and (max-width: 800px), (max-height: 650px) {
    font-size: 20px;
    align-self: start;
  }
`

export const TimePeriod = styled.span`
  font-family: 'Titillium Web', sans serif;
  font-size: 14px;
  color: var(--primary-text-colour);
  @media screen and (max-width: 800px), (max-height: 650px) {
    font-size: 18px;
    line-height: 20px;
  }
`
export const ExperienceTitle = styled.span`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 800px), (max-height: 650px) {
    flex-direction: column;
    * {
      margin: 5px 0px;
    }
  }
`

interface OrgLogoProps {
  url: string
}

export const OrgLogo = styled.img<OrgLogoProps>`
  grid-area: logo;
  justify-self: center;
  align-self: center;
  width: 70%;
  @media screen and (max-width: 800px), (max-height: 650px) {
    height: 5vh;
    width: 25vw;
    object-fit: contain;
    content: url(${({ url }: OrgLogoProps) =>
      url.replace(/.webp|.png/, '-long.png')});
  }
`

export const ExperienceDescription = styled.span`
  font-family: 'Titillium Web', sans-serif;
  font-size: 13px;
  font-weight: bold;
  @media screen and (max-width: 800px), (max-height: 650px) {
    font-size: 16px;
  }
`

export const DescriptionContainer = styled.div`
  width: 100%;
  grid-area: organisation;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 800px), (max-height: 650px) {
    padding: 10px;
    justify-content: start;
  }
`

export const TitlesAndIcons = styled.h2`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0px;
  @media screen and (max-width: 800px), (max-height: 650px) {
    flex-direction: column;
    align-content: start;
    * {
      margin: 5px 0px;
    }
  }
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
  @media screen and (max-width: 800px), (max-height: 650px) {
    font-size: 16px;
    align-self: start;
  }
`

export const IconsContainer = styled.span`
  svg {
    height: 20px;
    @media screen and (max-width: 800px), (max-height: 650px) {
      height: 25px;
    }
  }
`
