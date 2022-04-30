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

body {
  height: 100%;
  background-color: var(--background-colour);
  margin: 0;
  color: var(--text-colour);
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.app {
  height: 100%;
  background-color: var(--background-colour);
  padding: 20px 40px;
  color: var(--text-colour);
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
