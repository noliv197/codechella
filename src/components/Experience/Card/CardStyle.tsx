import styled from "styled-components";

const CardStyle = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 380px;
    margin-bottom: ${props => props.theme.spacing.lg};
    
    :nth-child(even) .image{
        order: 1;
    }
    :nth-child(even) .container{
        text-align: end;
    }
    .image{
        width: 600px;
        height: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        display: inline;
        border-radius: 16px;
    }
    .container{
        width: 500px;
        box-sizing: border-box;
        padding: ${props => props.theme.spacing.rg};
        flex-grow: 1;
    }
    .container h2{
        font-size: ${props => props.theme.typography.size.rg};
        font-weight: ${props => props.theme.typography.weight.bold};
        color: ${props => props.theme.colors.summer.text.secondary};
        margin-bottom: ${props => props.theme.spacing.sm};
    }
    .container p{
        color: ${props => props.theme.colors.summer.text.secondary};
        line-height: 25px;
    }
`

export default CardStyle