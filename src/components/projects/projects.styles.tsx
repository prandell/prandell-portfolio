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
  .projects {
    padding-top: 30px;
    padding-left: 30px;
    grid-area: main;
  }
`

export const TitleContainer = styled.div`
  grid-area: title;
  justify-self: start;
  align-self: start;
  padding-top: 30px;
  padding-left: 30px;

  h2 {
    margin: 20px 0px;
  }

  hr {
    margin-left: 0px;
    background-color: var(--accent-colour-2);
    border: 0 none;
    color: var(--accent-colour-2);
    width: 5%;
    border-radius: 4px;
    height: 7px;
  }

  span {
    margin-bottom: 0px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 15px;
  }
`
