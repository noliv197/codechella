import {createGlobalStyle} from 'styled-components'

const GlobalVariables = createGlobalStyle`
    :root{
        --font-primary: Raleway;
        --font-secondary: Calistoga;

        --weight-extraBold: 700;
        --weight-bold: 500;
        --weight-normal: 400;

        --size-xg: 64px;
        --size-lg: 48px;
        --size-md: 40px;
        --size-rg: 32px;
        --size-sm: 20px;

        --spacing-xg: 5rem;
        --spacing-lg: 3.5rem;
        --spacing-md: 2rem;
        --spacing-rg: 1.5rem;
        --spacing-sm: 1rem;
        --spacing-xs: 0.5rem;

        --color-premium: #0E7DF1;
        --color-common: #FE016E;
        --color-groundFloor: #01A89E;
        --color-superiorFloor: #3F51B5;
        --color-ramp: #0E7DF1;
        --color-valid: #2fbb3b;
        --color-invalid: #bb2f2f;
    }
`
export default GlobalVariables