import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    text:{
      primary: string
      secondary: string
    }
    background:{
      primary: string
      secondary: string
      light: string
      gradient: {
        light: string
        medium: string
        dark: string
      }
    }
    filter:{
      primary: string
      secondary: string
    }
    logo:{
      name: string
      symbol: string
    }
  }
}