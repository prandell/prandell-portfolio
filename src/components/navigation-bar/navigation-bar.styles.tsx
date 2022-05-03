import styled from 'styled-components'

export const NavigationBarContainer = styled.div`
  grid-area: header;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-family: 'Russo One', sans serif;
  font-size: 22px;
`
export const NameTitle = styled.span`
  color: var(--accent-colour-2);
`

export const NavLinksContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
  font-family: 'Russo One', sans serif;
  font-size: 20px;
  button {
    padding: 0px 15px;
    cursor: pointer;
    margin-left: 10px;
    font-family: 'Russo One', sans serif;
    font-size: 18px;
  }
`

export const NavLink = styled.span`
  padding: 0px 20px;
  cursor: pointer;
`
