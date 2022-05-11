import styled from 'styled-components'

export const ContactMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 42%;
  @media screen and (max-width: 800px) {
    margin: 10px auto;
    width: 90%;
    height: 100%;
    grid-area: contact;
    scroll-snap-align: start;
  }
`

export const FormTitle = styled.span`
  margin-top: 10px;
  font-size: 18px;
  @media screen and (max-width: 800px) {
    font-size: 30px;
  }
`

export const PageBreak = styled.hr`
  display: none;
  margin-left: 0px;
  background-color: var(--accent-colour-2);
  border: 0 none;
  color: var(--accent-colour-2);
  width: 5%;
  border-radius: 4px;
  min-width: 40px;
  height: 7px;
  @media screen and (max-width: 800px) {
    display: block;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    min-width: 100px;
    padding: 0px 15px;
    cursor: pointer;
    font-family: 'Russo One', sans serif;
    font-size: 14px;
  }
  @media screen and (max-width: 800px) {
    button {
      min-width: 150px;
      padding: 0px 15px;
      cursor: pointer;
      font-family: 'Russo One', sans serif;
      font-size: 18px;
    }
  }
`

export const ContactMeForm = styled.form`
  width: 100%;
`

export const SocialIconLink = styled.a`
  width: auto;
  height: 40px;
  line-height: 50px;
  padding: 0px 5px;
  color: var(--primary-text-colour);
  cursor: pointer;
  @media screen and (max-width: 800px) {
    height: 50px;
    line-height: 60px;
    padding: 0px 10px;
  }
`

export const Socials = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
