import 'styled-components';
interface IFont {
  font : Array<string>
  weight: Object<number>
  size : IUnit
}
interface IUnit{
  xg:string
  lg:string
  md:string
  rg:string
  sm:string
  xs: string
}
interface IPallete {
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
}

declare module 'styled-components' {
  export interface DefaultTheme {
    typography: IFont
    spacing: IUnit
    colors: {
      sectors: Object<string>
      summer: IPallete
      boreal: IPallete
    }
  }
}