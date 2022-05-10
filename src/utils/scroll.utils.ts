import { scroller, animateScroll } from 'react-scroll'

export const PROJECTS_PAGE_ID = 'projects'
export const HOME_PAGE_ID = 'home'
export const ABOUT_PAGE_ID = 'about'
export const EXPERIENCE_PAGE_ID = 'experience'
export const APP_ROOT_ID = 'app-root'
export const PAGE_CONTAINER_ID = 'page-container'

export const scrollToAbout = (distanceInPages: number) => {
  scroller.scrollTo(ABOUT_PAGE_ID, {
    duration: distanceInPages * 500,
    delay: 0,
    smooth: 'easeInOutQuad',
    containerId: PAGE_CONTAINER_ID
  })
}

export const scrollToProjects = (distanceInPages: number) => {
  scroller.scrollTo(PROJECTS_PAGE_ID, {
    duration: distanceInPages * 500,
    delay: 0,
    smooth: 'easeInOutQuad',
    containerId: PAGE_CONTAINER_ID
  })
}

export const scrollToExperience = (distanceInPages: number) => {
  scroller.scrollTo(EXPERIENCE_PAGE_ID, {
    duration: distanceInPages * 500,
    delay: 0,
    smooth: 'easeInOutQuad',
    containerId: PAGE_CONTAINER_ID
  })
}

export const scrollToElement = (id: string) => {
  scroller.scrollTo(id, {
    duration: 500,
    delay: 0,
    smooth: 'easeInOutQuad',
    containerId: PAGE_CONTAINER_ID
  })
}

export const scrollByAmount = (amount: number) => {
  animateScroll.scrollMore(amount, {
    duration: 500,
    delay: 0,
    smooth: 'easeInOutQuad',
    containerId: PAGE_CONTAINER_ID
  })
}
