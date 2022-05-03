import { scroller } from 'react-scroll'

export const PROJECTS_PAGE_ID = 'projects'
export const HOME_PAGE_ID = 'home'
export const ABOUT_PAGE_ID = 'about'
export const APP_ROOT_ID = 'app-root'

export const scrollToAbout = (distanceInPages: number) => {
  scroller.scrollTo(ABOUT_PAGE_ID, {
    duration: distanceInPages * 500,
    delay: 0,
    smooth: 'easeInOutQuad',
    containerId: APP_ROOT_ID
  })
}

export const scrollToProjects = (distanceInPages: number) => {
  scroller.scrollTo(PROJECTS_PAGE_ID, {
    duration: distanceInPages * 500,
    delay: 0,
    smooth: 'easeInOutQuad',
    containerId: APP_ROOT_ID
  })
}

export const scrollToElement = (id: string) => {
  scroller.scrollTo(id, {
    duration: 500,
    delay: 0,
    smooth: 'easeInOutQuad',
    containerId: APP_ROOT_ID
  })
}
