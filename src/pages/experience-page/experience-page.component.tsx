import React, { FC } from 'react'
import { EXPERIENCE_PAGE_ID } from '../../utils/scroll.utils'
import Sidebar from '../../components/sidebar/sidebar.component'
import * as Styled from './experience-page.styles'
import EXPERIENCE_DATA from './experiences.json'
import Experience from '../../components/experience/experience.component'
import { FadeCarousel } from '../../components/carousel/carousel.component'
import CarouselItem from '../../components/carousel-item/carousel-item.component'

const ExperiencePage: FC = () => {
  return (
    <Styled.ExperiencePageContainer id={EXPERIENCE_PAGE_ID}>
      <Sidebar
        parentId={EXPERIENCE_PAGE_ID}
        hasUpArrow={true}
        hasDownArrow={true}
        hasScrollToTop={false}
      />
      <Styled.TitleContainer>
        <Styled.PageBreak />
        <Styled.ExperienceTitle>Experience</Styled.ExperienceTitle>
        <Styled.ExperienceBlurb>
          Despite still being early in my career, I have been fortunate enough
          to gain valuable experience with the following organisations.
        </Styled.ExperienceBlurb>
      </Styled.TitleContainer>
      {/* <Styled.ExperiencesContainer> */}
      <FadeCarousel>
        {EXPERIENCE_DATA.map((e) => (
          <CarouselItem key={e.name} experience={e} />
        ))}
      </FadeCarousel>
      {/* </Styled.ExperiencesContainer> */}
    </Styled.ExperiencePageContainer>
  )
}

export default ExperiencePage
