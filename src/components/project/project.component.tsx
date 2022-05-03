import React, { FC } from 'react'
import Button from '../button/button.component'
import * as Styled from './project.styles'

const Project: FC = () => {
  return (
    //Grid
    <Styled.ProjectContainer>
      <span className="project-title">Example Title</span>
      <span className="project-description">
        This is an example description which describes a number of things I did
        in this project including yadadada
      </span>
      <Button>Github</Button>
    </Styled.ProjectContainer>
  )
}

export default Project
