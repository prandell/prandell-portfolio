import styled from 'styled-components'

export const ContactMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 42%;

  h2 {
    margin: 10px 0;
  }
`

export const FormTitle = styled.span`
  margin-top: 10px;
  font-size: 18px;
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
`

export const Socials = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
