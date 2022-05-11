import styled from 'styled-components'
import { Menu, MenuButton } from '@szhsin/react-menu'
import '@szhsin/react-menu/dist/index.css'
import '@szhsin/react-menu/dist/theme-dark.css'
import '@szhsin/react-menu/dist/transitions/slide.css'

export const NavigationMenuContainer = styled.div`
  display: none;
  width: 100%;
  padding: 15px;
  height: 8vh;
  justify-content: space-between;
  align-items: center;
  font-family: 'Russo One', sans serif;
  font-size: 24px;
  @media screen and (max-width: 800px) {
    display: flex;
  }
`
export const NameTitle = styled.span`
  cursor: pointer;
  color: var(--accent-colour-2);
`

export const NavMenu = styled(Menu)``

export const NavMenuButton = styled(MenuButton)`
  height: 100%;
  border: solid;
  background-color: var(--accent-colour-3);
  svg {
    margin-top: 2px;
  }
`

export const ArrowContainer = styled.div`
  position: absolute;
  bottom: 15px;
  left: 15px;
  border-radius: 5px;
  width: 40px;
  height: 100px;
  z-index: 1000;
  display: grid;
  flex-direction: column;
  justify-content: center;
  align-content: end;
  background-color: #ffffff0a;
  padding-bottom: 2px;
  display: none;
  margin-bottom: 0px;
  @media screen and (max-width: 800px) {
    display: grid;
  }
`
