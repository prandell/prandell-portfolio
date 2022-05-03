import styled from 'styled-components'

export const ProjectContainer = styled.div`
  width: 90%;
  height: 40%;
  margin-top: 5px;
  display: flex;
  flex-direction: column;

  .project-title {
    width: 100%;
    font-family: 'Russo One', sans serif;
    font-size: 18px;
    color: var(--accent-colour-2);
    padding-bottom: 10px;
  }

  .project-description {
    font-family: 'Roboto', sans serif;
    font-size: 15px;
    font-weight: bold;
    padding-bottom: 15px;
  }

  button {
    min-width: 100px;
    width: 25%;
    padding: 0px 5px;
    cursor: pointer;
    font-family: 'Russo One', sans serif;
    font-size: 14px;
  }
`
