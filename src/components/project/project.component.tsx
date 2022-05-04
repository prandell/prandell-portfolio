import React, { FC } from 'react'
import { IProject } from '../../models/project.models'
import ButtonLink from '../button-link/button-link.component'
import * as Styled from './project.styles'

interface ProjectProps {
  project: IProject
}

const Project: FC<ProjectProps> = ({ project }: ProjectProps) => {
  const { name, description, github, liveDemo } = project

  return (
    //Grid
    <Styled.ProjectContainer>
      <Styled.ProjectTitle>{name}</Styled.ProjectTitle>
      <Styled.ProjectDescription>{description}</Styled.ProjectDescription>
      <Styled.LinksContainer>
        <ButtonLink target="_blank" href={github}>
          <Styled.ButtonLinkIcon />
          Github
        </ButtonLink>
        <ButtonLink target="_blank" href={liveDemo}>
          Live Demo
        </ButtonLink>
      </Styled.LinksContainer>
    </Styled.ProjectContainer>
  )
}

export default Project
