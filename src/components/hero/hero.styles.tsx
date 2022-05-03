import styled from 'styled-components'

export const HeroContainer = styled.div`
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
  padding-left: 50px;
  font-family: 'Russo One', sans serif;
  font-size: 30px;
`

export const HeroOctaneContainer = styled.div`
  height: 100%;
  width: 100%;
  grid-area: three;
  margin-bottom: -15%;
  justify-self: center;
  cursor: pointer;
  overflow: hidden;
`
