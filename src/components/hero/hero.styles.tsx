import styled from 'styled-components'

export const HeroContainer = styled.div`
  width: 95vw;
  display: grid;
  grid-area: main;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 2fr 5fr;
  grid-template-areas:
    'subtitle'
    'title'
    'three';
  align-items: center;
  overflow: hidden;
`

export const HeroSubtitle = styled.span`
  grid-area: subtitle;
  align-self: end;
  padding-left: 5%;
  font-family: 'Russo One', sans serif;
  font-size: 28px;
  @media (max-width: 800px) {
    align-self: center;
    font-size: 24px;
  }
`

export const HeroOctaneContainer = styled.div`
  height: 80%;
  width: 100%;
  min-width: 270px;
  grid-area: three;
  margin-bottom: -15%;
  justify-self: center;
  cursor: pointer;
  overflow: hidden;

  @media (max-width: 800px) {
    height: 60%;
    margin-bottom: -25%;
  }

  @media (max-width: 600px) {
    height: 55%;
  }

  @media (max-width: 500px) {
    height: 50%;
  }

  @media (max-width: 400px) {
    height: 45%;
  }
`
