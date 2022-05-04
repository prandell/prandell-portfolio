import styled from 'styled-components'

export const ProjectsPageContainer = styled.div`
  padding: 20px 20px 20px 0px;
  scroll-snap-align: start;
  height: 100vh;
  display: grid;
  font-family: 'Russo One', sans serif;
  grid-template-columns: 50px 1fr 1fr;
  grid-template-rows: 2fr 6fr;
  grid-template-areas:
    'sidebar title title'
    'sidebar main sidemain';

  .sidebar-container {
    grid-area: sidebar;
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
`

export const TitleContainer = styled.div`
  grid-area: title;
  justify-self: start;
  align-self: start;
  padding-top: 5%;
  padding-left: 5%;
  display: flex;
  flex-direction: column;
`

export const ProjectsTitle = styled.span`
  margin-top: 10px;
  margin-bottom: 20px;
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

export const ProjectsBlurb = styled.span`
  margin-bottom: 0px;
  font-family: 'Titillium Web', sans-serif;
  font-weight: bold;
  font-size: 15px;
`
