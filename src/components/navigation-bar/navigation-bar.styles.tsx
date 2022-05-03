import styled from 'styled-components'

export const NavigationBarContainer = styled.div`
  grid-area: header;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-family: 'Russo One', sans serif;
  font-size: 20px;
  .name {
    color: var(--accent-colour-2);
  }
  .links-container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 50%;
    span {
      padding: 0px 20px;
      cursor: pointer;
    }
    button {
      padding: 0px 15px;
      cursor: pointer;
      font-family: 'Russo One', sans serif;
      font-size: 20px;
    }
  }
`
