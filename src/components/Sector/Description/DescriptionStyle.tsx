import styled from "styled-components";

const DescriptionStyle = styled.section`
    text-align: center;
    padding: var(--spacing-rg);
    h2{
        font-size: var(--size-md);
        font-weight: var(--weight-extraBold);
        margin: var(--spacing-md) 0;
        color: ${props=> props.theme.text.secondary};
    }
    div{
        display: flex;
        align-items: start;
        justify-content: space-between;
        min-height: 500px;
        padding: 0 var(--spacing-md);
        box-sizing: border-box;
    }
    figure:nth-child(even){
        align-self: end;
    }
    figure{
        display: flex;
        flex-direction: column;
        width: 380px;
    }
    figure img{
        width: 100%;
        height: 230px;
        object-fit: cover;
        border-radius: 16px;
    }
    figcaption h3{
        font-size: var(--size-rg);
        font-weight: var(--weight-Bold);
        margin: var(--spacing-sm) 0;
        color: ${props=> props.theme.text.secondary};
    }
    figcaption p{
        font-size: var(--size-xs);
        color: ${props=> props.theme.text.secondary};
        padding: 0 var(--spacing-sm);
        line-height: 24px;
    }

    @media screen and (max-width: 768px){
        div{
            flex-direction: column;
            align-items: center;
        }
        figure{
            width: 100%;
            align-items: center;
            margin: var(--spacing-sm) 0;
        }
        figure img{
            width: 382px;
            heigth: 340px;
        }
        figure:nth-child(even){
            align-self: center;
        }
    }
    @media screen and (max-width: 360px){
        &{
            padding: var(--spacing-sm);
        }
        h2{
            font-size: var(--size-rg);
        }
        div{
            padding: 0;
        }
        figure img{
            width: 100%;
            heigth: 100%;
        }
    }
`

export default DescriptionStyle