import React, { FC } from 'react'
import { PROJECTS_PAGE_ID } from '../../utils/scroll.utils'
import Sidebar from '../sidebar/sidebar.component'
import SkillsSphere from '../skills-sphere/skills-sphere.component'
import * as Styled from './projects.styles'
import PROJECT_DATA from './projects.json'
import Project from '../project/project.component'

const Projects: FC = () => {
  return (
    //Grid
    <Styled.ProjectsPageContainer id={PROJECTS_PAGE_ID}>
      <Sidebar
        parentId={PROJECTS_PAGE_ID}
        hasUpArrow={true}
        hasDownArrow={true}
      />
      <Styled.TitleContainer>
        <hr></hr>
        <h2>Projects</h2>
        <span>
          Most of my experience is in full-stack developement and platform
          engineering, however these are some isolated projects that showcase my
          progression as a developer.
        </span>
      </Styled.TitleContainer>
      <div className="projects">
        {PROJECT_DATA.map((p) => (
          <Project />
        ))}
      </div>
      <div />
      <SkillsSphere />
    </Styled.ProjectsPageContainer>
  )
}

export default Projects
