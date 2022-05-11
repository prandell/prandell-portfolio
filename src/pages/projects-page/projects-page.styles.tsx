import styled from 'styled-components'

export const ProjectsPageContainer = styled.div`
  padding: 20px 20px 20px 0px;
  scroll-snap-align: start;
  height: 100vh;
  display: grid;
  font-family: 'Russo One', sans serif;
  grid-template-columns: 50px 1fr 1fr;
  grid-template-rows: 1fr 4fr;
  grid-template-areas:
    'sidebar title title'
    'sidebar main sidemain';

  @media screen and (max-width: 800px) {
    scroll-snap-align: unset;
    padding: 10px;
    height: 184vh;
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 1.5fr 2fr;
    grid-template-areas:
      'title'
      'sidemain'
      'main';
  }
`

export const ProjectsContainer = styled.div`
  padding-top: 0px;
  padding-left: 10%;
  padding-bottom: 10%;
  grid-area: main;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media screen and (max-width: 800px) {
    scroll-snap-align: start;
    justify-content: start;
    padding: 10px;
    padding-top: 20px;
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
  @media screen and (max-width: 800px) {
    scroll-snap-align: start;
  }
`

export const ProjectsTitle = styled.span`
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 24px;
  @media screen and (max-width: 800px) {
    font-size: 30px;
  }
`

export const PageBreak = styled.hr`
  margin-left: 0px;
  background-color: var(--accent-colour-2);
  border: 0 none;
  color: var(--accent-colour-2);
  width: 5%;
  min-width: 40px;
  border-radius: 4px;
  height: 7px;
`

export const ProjectsBlurb = styled.span`
  margin-bottom: 0px;
  font-family: 'Titillium Web', sans-serif;
  font-weight: bold;
  font-size: 15px;
  @media screen and (max-width: 800px) {
    font-size: 20px;
  }
`
