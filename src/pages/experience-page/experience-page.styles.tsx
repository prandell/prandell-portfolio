import styled from 'styled-components'

export const ExperiencePageContainer = styled.div`
  padding: 20px 20px 20px 0px;
  scroll-snap-align: start;
  height: 100vh;
  display: grid;
  font-family: 'Russo One', sans serif;
  grid-template-columns: 50px 1fr;
  grid-template-rows: 1fr 4fr;
  grid-template-areas:
    'sidebar title '
    'sidebar experiences';
`

export const ExperiencesContainer = styled.div`
  padding-top: 2.5%;
  padding-left: 5%;
  padding-bottom: 2.5%;
  grid-area: experiences;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    scroll-snap-type: x mandatory;
    height: 100%;
    overflow-y: hidden;
    overflow-x: auto;
    margin: 0 auto;
    display: grid;
    grid-auto-flow: column;
    width: 90%;
    gap: 1rem;
  }
`

export const TitleContainer = styled.div`
  grid-area: title;
  justify-self: start;
  align-self: start;
  padding-top: 2.5%;
  padding-left: 5%;
  padding-right: 5%;
  display: flex;
  flex-direction: column;
`

export const ExperienceTitle = styled.span`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 24px;
`

export const PageBreak = styled.hr`
  margin-left: 0px;
  background-color: var(--accent-colour-2);
  border: 0 none;
  color: var(--accent-colour-2);
  width: 5%;
  border-radius: 4px;
  height: 7px;
`

export const ExperienceBlurb = styled.span`
  margin-bottom: 0px;
  font-family: 'Titillium Web', sans-serif;
  font-weight: bold;
  font-size: 15px;
`
