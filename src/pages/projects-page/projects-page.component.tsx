import React, { FC } from 'react'
import { PROJECTS_PAGE_ID } from '../../utils/scroll.utils'
import Sidebar from '../../components/sidebar/sidebar.component'
import SkillsSphere from '../../components/skills-sphere/skills-sphere.component'
import * as Styled from './projects-page.styles'
import PROJECT_DATA from './projects.json'
import Project from '../../components/project/project.component'

const ProjectsPage: FC = () => {
  return (
    //Grid
    <Styled.ProjectsPageContainer id={PROJECTS_PAGE_ID}>
      <Sidebar
        parentId={PROJECTS_PAGE_ID}
        hasUpArrow={true}
        hasDownArrow={true}
        hasScrollToTop={false}
      />
      <Styled.TitleContainer>
        <Styled.PageBreak />
        <Styled.ProjectsTitle>Projects</Styled.ProjectsTitle>
        <Styled.ProjectsBlurb>
          Most of my experience is in full-stack developement and platform
          engineering, however these are some isolated projects that showcase my
          progression as a developer.
        </Styled.ProjectsBlurb>
      </Styled.TitleContainer>
      <Styled.ProjectsContainer>
        {PROJECT_DATA.map((p) => (
          <Project key={p.name} project={p} />
        ))}
      </Styled.ProjectsContainer>
      <div />
      <SkillsSphere />
    </Styled.ProjectsPageContainer>
  )
}

export default ProjectsPage
