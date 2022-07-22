import styled from 'styled-components'

export const ExperienceContainer = styled.div`
  padding: 20px;
  width: 90%;
  height: 100%;
  margin: 20px auto;
  display: grid;
  border: solid;
  border-color: var(--accent-colour-1);
  grid-template-columns: 4fr 4fr;
  grid-template-rows: 2fr 40px 40px 4fr;
  grid-template-areas:
    'logo logo'
    'titles date'
    'skills skills'
    'description description';

  // @media screen and (max-width: 800px), (max-height: 650px) {
  //   width: 80vw;
  //   grid-template-columns: 1fr;
  //   grid-template-rows: 1fr;
  //   grid-template-areas: 'organisation';
  //   scroll-snap-align: start;
  // }
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

export const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: fit-content;
`

export const TimePeriod = styled.span`
  font-family: 'Titillium Web', sans serif;
  grid-area: date;
  align-content: center;
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  margin-right: 20px;
  justify-content: end;
  font-size: 14px;
  color: var(--primary-text-colour);
  @media screen and (max-width: 800px), (max-height: 650px) {
    font-size: 18px;
    line-height: 20px;
  }
`

interface OrgLogoProps {
  url: string
}

export const OrgLogo = styled.img<OrgLogoProps>`
  grid-area: logo;
  justify-self: center;
  align-self: center;
  height: 8vh;
  width: 25vw;
  object-fit: contain;
  content: url(${({ url }: OrgLogoProps) =>
    url.replace(/.webp|.png/, '-long.png')});
  }
`

export const ExperienceDescription = styled.span`
  grid-area: description;
  display: flex;
  margin: 20px 0;
  text-align: left;
  font-family: 'Titillium Web', sans-serif;
  font-size: 15px;
  font-weight: bold;
  @media screen and (max-width: 800px), (max-height: 650px) {
    font-size: 18px;
  }
`

export const JobTitles = styled.span`
  display: flex;
  grid-area: titles;
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
  grid-area: skills;
  display: flex;
  svg {
    height: 20px;
    @media screen and (max-width: 800px), (max-height: 650px) {
      height: 25px;
    }
  }
`
