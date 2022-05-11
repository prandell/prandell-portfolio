import { createGlobalStyle } from 'styled-components'

const palette = {
  themeDark: {
    text: '#f9f9f9',
    background: '#0f1014',
    lightPurple: '#cbcdf6',
    mainPurple: '#9da1f3',
    deepPurple: '#6f76f1'
  }
}

// [data-theme='light'] {
//   --primary-colour: ${palette.themeLight.text};
//   --secondary-colour: ${palette.themeLight.background};
//   --secondary-text-colour: ${palette.themeLight.accentOne};
//   --accent-colour: ${palette.themeLight.accentTwo};
//   --secondary-accent-colour: ${palette.themeLight.accentThree};
// }

export const GlobalStyle = createGlobalStyle`
:root {
  --primary-text-colour: ${palette.themeDark.text};
  --background-colour: ${palette.themeDark.background};
  --accent-colour-1: ${palette.themeDark.lightPurple};
  --accent-colour-2: ${palette.themeDark.mainPurple};
  --accent-colour-3: ${palette.themeDark.deepPurple};
}

html, 
#root {
}

body {
  background-color: var(--background-colour);
  margin: 0;
  overflow-y: hidden;
  color: var(--primary-text-colour);
  font-family: 'Titillium Web', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app {
  height: 100vh;
  background-color: var(--background-colour);
  color: var(--primary-text-colour);
  @media screen and (max-width: 800px) {
    overflow-y: hidden;
  }
}

#page-container {
  height: 100vh;
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow: auto;
  @media screen and (max-width: 800px) {
    scroll-snap-type: unset;
    scroll-snap-points-y: unset;
    scroll-behavior: smooth;
    overflow: auto;
  }
}

a {
  color: var(--primary-text-colour);
  text-decoration: none;
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  a:focus {
    text-decoration: none;
  }
  a:hover,
  a:active {
    text-decoration: none;
  }
}

* {
  box-sizing: border-box;
}

`
