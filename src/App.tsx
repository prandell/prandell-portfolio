import React, { lazy, Suspense, useEffect } from 'react'
import { GlobalStyle } from './global.styles'
import { RecoilRoot } from 'recoil'
import { APP_ROOT_ID } from './utils/scroll.utils'
import ResumeModal from './components/resume-modal/resume-modal.component'
import ReactModal from 'react-modal'
import LoadingOverlay from './components/loading-overlay/loading-overlay.component'

const LandingPage = lazy(
  () => import('./pages/landing-page/landing-page.component')
)
const ProjectsPage = lazy(
  () => import('./pages/projects-page/projects-page.component')
)
const ExperiencePage = lazy(
  () => import('./pages/experience-page/experience-page.component')
)
const AboutPage = lazy(() => import('./pages/about-page/about-page.component'))

function App() {
  useEffect(() => ReactModal.setAppElement(`#${APP_ROOT_ID}`), [])
  return (
    <RecoilRoot>
      <GlobalStyle />
      <div className="app" id={APP_ROOT_ID}>
        <Suspense fallback={<LoadingOverlay />}>
          <ResumeModal />
          <LandingPage />
          <ProjectsPage />
          <ExperiencePage />
          <AboutPage />
        </Suspense>
      </div>
    </RecoilRoot>
  )
}

export default App
