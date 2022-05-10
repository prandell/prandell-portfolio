import React, { lazy, Suspense, useEffect } from 'react'
import { APP_ROOT_ID, PAGE_CONTAINER_ID } from './utils/scroll.utils'
import ResumeModal from './components/resume-modal/resume-modal.component'
import ReactModal from 'react-modal'
import LoadingOverlay from './components/loading-overlay/loading-overlay.component'
import NavigationMenu from './components/navigation-menu/navigation-menu.component'

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
    <div className="app" id={APP_ROOT_ID}>
      <Suspense fallback={<LoadingOverlay />}>
        <NavigationMenu />
        <div id={PAGE_CONTAINER_ID}>
          <ResumeModal />
          <LandingPage />
          <ProjectsPage />
          <ExperiencePage />
          <AboutPage />
        </div>
      </Suspense>
    </div>
  )
}

export default App
