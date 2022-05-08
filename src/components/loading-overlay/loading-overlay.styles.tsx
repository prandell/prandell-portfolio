import styled from 'styled-components'

export const LoaderOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LogoLoader = styled.img`
  width: 100px;
  display: block;
  margin-top: 200px;
  margin-left: auto;
  margin-right: auto;
  animation: fadeIn ease 3s;
  -webkit-animation: fadeIn ease infinite 3s;
  -moz-animation: fadeIn ease infinite 3s;
  -o-animation: fadeIn ease infinite 3s;
  -ms-animation: fadeIn ease infinite 3s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @-moz-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @-o-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @-ms-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`
