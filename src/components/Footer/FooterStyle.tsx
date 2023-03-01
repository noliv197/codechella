import styled from "styled-components";

const FooterStyle = styled.div`
    background-color: ${props => props.theme.colors.summer.background.gradient.dark};
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme.colors.summer.text.secondary};
    padding: ${props => props.theme.spacing.md};
    
    img{
        filter: ${props => props.theme.colors.summer.filter.secondary};
    }
    section{
        display: flex;
        flex-direction: column;
    }
    section span:first-child{
        margin-bottom: ${props => props.theme.spacing.sm};
    }
    ul{
        display: flex;
    }
    ul a{
        color: ${props => props.theme.colors.summer.text.secondary};
        margin-left: ${props => props.theme.spacing.xs};
    }
`

export default FooterStyle