import React from 'react'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { CarouselProps } from 'react-responsive-carousel'
import * as Styled from './carousel.styles'

export const FadeCarousel: React.FC<Partial<CarouselProps>> = ({
  children
}) => (
  <Styled.FadeCarousel
    showArrows
    showIndicators
    useKeyboardArrows
    infiniteLoop
    stopOnHover
    showStatus={false}
  >
    {children}
  </Styled.FadeCarousel>
)
