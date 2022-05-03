import styled from 'styled-components'

export const AboutContainer = styled.div`
  padding: 20px 20px;
  scroll-snap-align: start;
  height: 100vh;
  .title {
    grid-area: title;
    justify-self: start;
    align-self: end;

    h2 {
      margin-bottom: 0px;
    }

    hr {
      margin-left: 0px;
      background-color: var(--accent-colour-2);
      border: 0 none;
      color: var(--accent-colour-2);
      width: 50%;
      border-radius: 4px;
      height: 7px;
    }
  }
`
