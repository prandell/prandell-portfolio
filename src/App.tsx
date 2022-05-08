import React, { useEffect } from 'react'
import { GlobalStyle } from './global.styles'
import { RecoilRoot } from 'recoil'
import LandingPage from './pages/landing-page/landing-page.component'
import ProjectsPage from './pages/projects-page/projects-page.component'
import AboutPage from './pages/about-page/about-page.component'
import { APP_ROOT_ID } from './utils/scroll.utils'
import ResumeModal from './components/resume-modal/resume-modal.component'
import ReactModal from 'react-modal'
import ExperiencePage from './pages/experience-page/experience-page.component'

function App() {
  useEffect(() => ReactModal.setAppElement(`#${APP_ROOT_ID}`), [])
  // useEffect(() => {
  //   const getSteamGames = async () => {
  //     const response = await fetch('/.netlify/functions/get-steam-games', {
  //       method: 'get',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     }).then((res) => {
  //       res.json()
  //     })
  //     //set Global State
  //   }
  //   getSteamGames()
  // })
  return (
    <RecoilRoot>
      <GlobalStyle />
      <div className="app" id={APP_ROOT_ID}>
        <ResumeModal />
        <LandingPage />
        <ProjectsPage />
        <ExperiencePage />
        <AboutPage />
      </div>
    </RecoilRoot>
  )
}

export default App
