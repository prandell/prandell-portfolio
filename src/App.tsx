import React from 'react'
import Octane from './components/threejs-octane/Octane'
import { GlobalStyle } from './global.styles'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue
} from 'recoil'

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <div className="app">
        {/* <Octane /> */}
        {/* <LandingPage/> */}
        {/* <Projects/> */}
        {/* <AboutMe/> */}
      </div>
    </RecoilRoot>
  )
}

export default App
