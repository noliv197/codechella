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
    }
    section{
        display: flex;
        flex-direction: column;
    }
    section span:first-child{
        margin-bottom: var(--spacing-sm);
    }
    ul{
        display: flex;
    }
    ul a{
        color: ${props => props.theme.text.secondary};
        margin-left: var(--spacing-xs);
    }
`

export default FooterStyle