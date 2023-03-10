import styled from 'styled-components'

const NavbarStyled = styled.nav`
    padding: var(--spacing-sm);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    
    a{
        margin-right: var(--spacing-xs);
        color: ${props => props.theme.text.primary};
    }
    a:hover{
        text-decoration: underline;
    }

    @media screen and (max-width: 768px){
        &{
            width: 100%;
            justify-content: space-evenly;
        }
    }
    @media screen and (max-width: 360px){
        &{
           display: none;
        }
    }
`

export default NavbarStyled