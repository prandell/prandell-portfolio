import React, { FC } from 'react'
import { IExperience } from '../../models/experience.model'
import { IconDictionary } from '../icon-svgs/icon-svgs.styles'
import * as Styled from './experience.styles'

interface ExperienceProps {
  experience: IExperience
}

const Experience: FC<ExperienceProps> = ({ experience }: ExperienceProps) => {
  const { name, description, title, logo, icons, time } = experience

  return (
    //Grid
    <Styled.ExperienceContainer key={name}>
      <Styled.OrgLogo url={logo} src={logo} alt="name" />
      <Styled.DescriptionContainer>
        <Styled.ExperienceTitle>
          <Styled.OrgName>{name}</Styled.OrgName>
          <Styled.TimePeriod> {time}</Styled.TimePeriod>
        </Styled.ExperienceTitle>
        <Styled.TitlesAndIcons>
          <Styled.JobTitles>{title}</Styled.JobTitles>
          <Styled.IconsContainer>
            {icons ? icons.map((i) => IconDictionary[i]) : ''}
          </Styled.IconsContainer>
        </Styled.TitlesAndIcons>
        <Styled.ExperienceDescription>
          {description}
        </Styled.ExperienceDescription>
      </Styled.DescriptionContainer>
    </Styled.ExperienceContainer>
  )
}

export default Experience
