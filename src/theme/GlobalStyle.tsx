import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0; 
  font-family: "${props => props.theme.typography.font[0]}", sans-serif;
}
main{
  background-image: linear-gradient(
    ${props => props.theme.colors.summer.background.gradient.light},
    ${props => props.theme.colors.summer.background.gradient.medium},
    ${props => props.theme.colors.summer.background.gradient.dark})
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
a{
  text-decoration: none;
  margin: 0;
  padding: 0; 
}
ul{
  list-style-type: none;
  margin: 0;
  padding: 0; 
}
li{
  margin: 0;
  padding: 0; 
}
  
`

export default GlobalStyle