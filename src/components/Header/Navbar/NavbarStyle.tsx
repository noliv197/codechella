import styled from 'styled-components'

const NavbarStyled = styled.nav`
    ul{
        display: flex;
        align-items: center;
    }
    ul li{
        margin-right: ${props => props.theme.spacing.xs};
    }
    a{
        color: ${props => props.theme.colors.summer.text.primary};
    }
    a:hover{
        text-decoration: underline;
    }
`

export default NavbarStyled