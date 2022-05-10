import styled from 'styled-components'

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: sidebar;
  justify-content: flex-end;
  align-content: end;
  margin-left: 10px;
  @media screen and (max-width: 800px) {
    display: none;
  }
`
