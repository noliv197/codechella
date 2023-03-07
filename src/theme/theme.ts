import { DefaultTheme } from 'styled-components'
export const summer: DefaultTheme = {
    text:{
        primary: "#FFFFFF",
        secondary:"#444444"
    },
    background:{
        primary: "#2E7BA2",
        secondary: "#DF9010",
        light: "#C8DEEF",
        gradient: {
            light: "#C8DEEF",
            medium: "#FBF0DD",
            dark: "#FACF9D"
        }
    },
    filter:{
        primary: "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(2%) hue-rotate(320deg) brightness(106%) contrast(101%)",
        secondary: "none"
    },
    logo:{
        name: "./img/logo.svg",
        symbol: "./img/simbolo-cinza.svg"
    }
}
export const boreal: DefaultTheme = {
    text:{
        primary: "#FFFFFF",
        secondary:"#FFFFFF"
    },
    background:{
        primary: "#4650BD",
        secondary: "#008364",
        light: "#C8DEEF",
        gradient: {
            light: "#304968",
            medium: "#36C1A0",
            dark: "#B6BCFF"
        }
    },
    filter:{
        primary: "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(2%) hue-rotate(320deg) brightness(106%) contrast(101%)",
        secondary: "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(2%) hue-rotate(320deg) brightness(106%) contrast(101%)"
    },
    logo:{
        name: "./img/logo-branco.svg",
        symbol: "./img/simbolo-branco.svg"
    }
}
