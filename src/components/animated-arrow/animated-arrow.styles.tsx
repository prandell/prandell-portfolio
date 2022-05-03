import styled from 'styled-components'
interface ArrowProps {
  isActive: boolean
}
export const ArrowDown = styled.div<ArrowProps>`
  width: 70%;
  align-self: center;
  margin-left: 100%;
  margin-bottom: 70%;
  transform: translate(-50%, -50%);
  span {
    display: ${(p: ArrowProps) => `${!p.isActive ? 'none' : 'block'}`};
    width: 15px;
    height: 15px;
    border-bottom: 5px solid var(--accent-colour-2);
    border-right: 5px solid var(--accent-colour-2);
    transform: rotate(45deg);
    margin: -10px;
    animation: animate 2s infinite;
    animation-delay: 10s;
  }
  span:nth-child(2) {
    animation-delay: 9.8s;
  }
  span:nth-child(3) {
    animation-delay: 9.6s;
  }
  @keyframes animate {
    0% {
      opacity: 0;
      transform: rotate(45deg) translate(-20px, -20px);
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: rotate(45deg) translate(20px, 20px);
    }
  }
`

export const ArrowUp = styled(ArrowDown)`
  width: 30%;
  margin-left: -100%;
  margin-top: 50%;
  transform: rotate(180deg) translate(-50%, -50%);
`
