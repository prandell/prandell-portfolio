import styled from 'styled-components'

const numTitles = 5
const eachDuration = 5
const cycleDuration = numTitles * eachDuration

export const SoftwareEngineer = styled.img`
  margin: auto;
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 15px;
  display: block;
  overflow-y: clip;
  width: 80%;
  -webkit-animation-name: fade;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-duration: ${cycleDuration}s;
  animation-name: fade;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: ${cycleDuration}s;
`

export const ComicCollector = styled.img`
  margin: auto;
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;
  display: block;
  width: 60%;
  -webkit-animation-name: fade;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-duration: ${cycleDuration}s;
  animation-name: fade;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: ${cycleDuration}s;
  animation-delay: -${2 * eachDuration}s;
`

export const CodeCrusher = styled.img`
  margin: auto;
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 10px;
  display: block;
  width: 60%;
  -webkit-animation-name: fade;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-duration: ${cycleDuration}s;
  animation-name: fade;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: ${cycleDuration}s;
  animation-delay: -${3 * eachDuration}s;
`

export const Web3Surfer = styled.img`
  margin: auto;
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 5px;
  display: block;
  width: 65%;
  -webkit-animation-name: fade;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-duration: ${cycleDuration}s;
  animation-name: fade;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: ${cycleDuration}s;
  animation-delay: -${4 * eachDuration}s;
`
export const GrandChampion = styled.img`
  margin: auto;
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: -20px;
  display: block;
  width: 80%;
  -webkit-animation-name: fade;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-duration: ${cycleDuration}s;
  animation-name: fade;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: ${cycleDuration}s;
  animation-delay: -${eachDuration}s;
`

export const TitlesContainer = styled.div`
  position: relative;
  height: 100%;
  @-webkit-keyframes fade {
    0% {
      opacity: 0;
    }
    ${80 / (numTitles * 2)}%,
    ${100 / (numTitles * 2)}%,
    ${120 / (numTitles * 2)}% {
      opacity: 1;
    }
    ${100 / numTitles}% {
      opacity: 0;
      display: none;
    }

    100% {
      opacity: 0;
    }
  }
  @keyframes fade {
    0% {
      opacity: 0;
    }
    ${80 / (numTitles * 2)}%,
    ${100 / (numTitles * 2)}%,
    ${120 / (numTitles * 2)}% {
      opacity: 1;
    }
    ${100 / numTitles}% {
      opacity: 0;
      display: none;
    }

    100% {
      opacity: 0;
    }
  }
`
