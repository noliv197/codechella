import styled from "styled-components";

const HeaderStyled = styled.header`
    background-color: ${props => props.theme.background.primary};
    
    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--spacing-xs);
        box-sizing: border-box;
    }

    img{
        filter: ${props => props.theme.filter.primary};
        width: 233px;
        height: auto;
    }
    button{
        background-color: ${props => props.theme.background.primary};
        border: none;
        cursor: pointer;
        display: none;
    }
    svg{
        color: ${props => props.theme.text.primary};
    }

    @media screen and (max-width: 768px){
        div{
            flex-direction: column;
        }
    }
    @media screen and (max-width: 360px){
        div{
            flex-direction: row;
        }
        img{
            width: 200px;
        }
        svg{
            font-size: 25px;
        }
        button{
            display: block;
        }
    }
`

export default HeaderStyled