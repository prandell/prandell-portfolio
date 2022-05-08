import styled from 'styled-components'

interface ArrowProps {
  isActive: boolean
}

export const GlowingArrowContainer = styled.h1`
  align-self: center;
  margin-left: 0%;
  margin-bottom: 0%;
  font-family: 'Russo One', sans serif;
  font-size: 30px;
  display: flex;
  color: var(--accent-colour-3);
  transform: rotate(-90deg);
  opacity: 0.4;
  &:hover {
    text-shadow: 0px 0px 4px var(--accent-colour-3),
      0px 0px 4px var(--accent-colour-3), 0px 0px 3px #5f34c1,
      2px 3px 15px #5f34c1, 2px 0px 15px, 5px 0px 125px, 20px 0vw 200px #5f34c1,
      40px 0vw 200px #5f34c1;
    opacity: 1;
  }
`

export const GlowingArrow = styled.span<ArrowProps>`
  cursor: pointer;
  display: ${({ isActive }: ArrowProps) => (isActive ? `block` : `none`)};
`
