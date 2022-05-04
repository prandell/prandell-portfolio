import React, { useEffect } from 'react'
import { GlobalStyle } from './global.styles'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue
} from 'recoil'
import LandingPage from './components/landing-page/landing-page.component'
import Projects from './components/projects/projects.component'
import AboutMe from './components/about-me/about-me.component'
import { APP_ROOT_ID } from './utils/scroll.utils'
import ResumeModal from './components/resume-modal/resume-modal.component'
import ReactModal from 'react-modal'

function App() {
  useEffect(() => ReactModal.setAppElement(`#${APP_ROOT_ID}`), [])
  return (
    <RecoilRoot>
      <GlobalStyle />
      <div className="app" id={APP_ROOT_ID}>
        <ResumeModal />
        <LandingPage />
        <Projects />
        <AboutMe />
      </div>
    </RecoilRoot>
  )
}

export default App
