import styled from 'styled-components'

export const SkillsSphere = styled.div`
  grid-area: sidemain;
  width: 100%;
  align-self: center;
  justify-self: center;
  text-align: center;
  * {
    margin: auto;
    width: 80%;
  }
  @media screen and (max-width: 800px) {
    align-self: start;
    margin-top: 50px;
    height: 70%;
    width: unset;
    * {
      width: 90%;
    }
  }
`
