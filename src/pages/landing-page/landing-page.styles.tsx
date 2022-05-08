import styled from 'styled-components'

export const LandingPageContainer = styled.div`
  padding: 20px 20px 20px 0px;
  scroll-snap-align: start;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-template-rows: 50px 1fr;
  grid-template-areas:
    'sidebar header'
    'sidebar main';
`
