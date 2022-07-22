import React, { FC } from 'react'
import { IExperience } from '../../models/experience.model'
import { IconDictionary } from '../icon-svgs/icon-svgs.styles'
import * as Styled from './carousel-item.styles'

interface ExperienceProps {
  experience: IExperience
}

const CarouselItem: FC<ExperienceProps> = ({ experience }: ExperienceProps) => {
  const { name, description, title, logo, icons, time } = experience

  return (
    //Grid
    <Styled.ExperienceContainer key={name}>
      <Styled.LogoContainer>
        <Styled.OrgLogo url={logo} src={logo} alt="name" />
      </Styled.LogoContainer>
      <Styled.TimePeriod> {time}</Styled.TimePeriod>
      <Styled.JobTitles>{title}</Styled.JobTitles>
      <Styled.IconsContainer>
        {icons ? icons.map((i) => IconDictionary[i]) : ''}
      </Styled.IconsContainer>
      <Styled.ExperienceDescription>{description}</Styled.ExperienceDescription>
    </Styled.ExperienceContainer>
  )
}

export default CarouselItem
