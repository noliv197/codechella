import styled from "styled-components";

const CardStyle = styled.figure`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--spacing-lg);
    
    :nth-child(even) img{
        order: 1;
    }
    :nth-child(even) .container{
        text-align: end;
    }
    img{
        width: 600px;
        height: 380px;
        object-fit: cover;
        display: inline;
        border-radius: 16px;
    }
    figcaption{
        width: 500px;
        box-sizing: border-box;
        padding: var(--spacing-rg);
        flex-grow: 1;
    }
    figcaption h2{
        font-size: var(--size-rg);
        font-weight: var(--weight-bold);
        color: ${props => props.theme.text.secondary};
        margin-bottom: var(--spacing-sm);
    }
    figcaption p{
        color: ${props => props.theme.text.secondary};
        line-height: 25px;
    }

    @media screen and (max-width: 1000px){
        img{
            width: 380px;
        }
    }

    @media screen and (max-width: 768px){
        &{
            flex-direction: column;
            text-align: center;
        }
        img{
            width: 100%;
            height: 381px;
        }
        figcaption{
            width: 100%;
            padding: var(--spacing-sm);
        }

        &:nth-child(even) img{
            order: 0;
        }
    }
`

export default CardStyle