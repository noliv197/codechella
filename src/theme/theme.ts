import { DefaultTheme } from 'styled-components'
export const defaultTheme: DefaultTheme = {
    typography:{
        font : ["Raleway","Calistoga"],
        weight: {
            extraBold: 700,
            bold: 500,
            normal: 400
        },
        size:{
            xg:"64px",
            lg:"48px",
            md:"40px",
            rg:"32px",
            sm:"20px",
            xs: ""
        }
    },
    spacing:{
        xg:"5rem",
        lg:"3.5rem",
        md:"2rem",
        rg:"1.5rem",
        sm:"1rem",
        xs:"0.5rem"
    },
    colors:{
        sectors: {
            premium:"#0E7DF1",
            common:"#FE016E",
            groundFloor:"#01A89E",
            superiorFloor:"#3F51B5",
            ramp:"#0E7DF1"
        },
        summer:{
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
            }
        },
        boreal:{
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
            }
        }
    }
}