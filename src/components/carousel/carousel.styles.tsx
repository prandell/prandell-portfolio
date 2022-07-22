import { Carousel } from 'react-responsive-carousel'
import styled from 'styled-components'

export const FadeCarousel = styled(Carousel)`
  .carousel.carousel-slider .control-arrow:hover {
    background: unset;
  }
  .carousel-slider {
    height: 100%;
  }

  .slider {
    height: 90%;
  }

  .carousel .slide {
    height: 100%;
  }

  .carousel .slider-wrapper {
    height: 80vh;
  }
`
