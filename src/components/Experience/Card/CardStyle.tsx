import styled from "styled-components";

const CardStyle = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 380px;
    margin-bottom: var(--spacing-lg);
    
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
        padding: var(--spacing-rg);
        flex-grow: 1;
    }
    .container h2{
        font-size: var(--size-rg);
        font-weight: var(--weight-bold);
        color: ${props => props.theme.text.secondary};
        margin-bottom: var(--spacing-sm);
    }
    .container p{
        color: ${props => props.theme.text.secondary};
        line-height: 25px;
    }
`

export default CardStyle