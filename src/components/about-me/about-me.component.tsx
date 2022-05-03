import React, { FC } from 'react'
import { ABOUT_PAGE_ID } from '../../utils/scroll.utils'
import Sidebar from '../sidebar/sidebar.component'
import * as Styled from './about-me.styles'

const AboutMe: FC = () => {
  return (
    //Grid
    <Styled.AboutContainer id={ABOUT_PAGE_ID}>
      <div className="title">
        <hr></hr>
        <h2>About Me</h2>
      </div>
      <Sidebar
        parentId={ABOUT_PAGE_ID}
        hasUpArrow={true}
        hasDownArrow={false}
      />
      {/* <Title/> */}
      {/* <main body/> */}
      {/* <Contact/> */}
      {/* <Footer/> */}
    </Styled.AboutContainer>
  )
}

export default AboutMe
