import styled from 'styled-components'

export const ProjectContainer = styled.div`
  width: 90%;
  height: 40%;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
`

export const ProjectTitle = styled.span`
  width: 100%;
  font-family: 'Russo One', sans serif;
  font-size: 18px;
  color: var(--accent-colour-2);
  padding-bottom: 10px;
`

export const ProjectDescription = styled.span`
  font-family: 'Titillium Web', sans-serif;
  font-size: 15px;
  font-weight: bold;
  padding-bottom: 15px;
`

export const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;

  a {
    min-width: 100px;
    width: 25%;
    padding: 0px 5px;
    margin: 0px 5px;
    cursor: pointer;
    font-family: 'Russo One', sans serif;
    font-size: 14px;
  }

  > *:first-child {
    margin-right: 5px;
    margin-left: 0px;
  }
`
