import styled from "styled-components";

const FooterStyle = styled.footer`
    background-color: ${props => props.theme.background.gradient.dark};
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme.text.secondary};
    padding: var(--spacing-md);
    
    img{
        filter: ${props => props.theme.filter.secondary};
        width: 233px;
        height: auto;
    }
    section{
        display: flex;
        flex-direction: column;
        align-items center:
    }
    div{
        display: flex;
        align-items: center;
    }
    ul{
        display: flex;
    }
    ul a{
        color: ${props => props.theme.text.secondary};
        margin-left: var(--spacing-xs);
    }
    .credits span:first-child{
        margin-bottom: var(--spacing-sm);
    }

    @media screen and (max-width: 768px){
        &{
            flex-direction: column;
            padding: var(--spacing-sm);
        }
        .credits{
            flex-direction: row;
            flex-wrap: wrap;
            margin-top: var(--spacing-rg);
            width: 100%;
            justify-content: space-evenly;
        }
    }
    @media screen and (max-width: 360px){
        &{
            padding: var(--spacing-sm);
        }
        div{
            flex-direction: column;
        }
        ul{
            margin-top: var(--spacing-sm);
        }
    }
`

export default FooterStyle