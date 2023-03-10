import styled from "styled-components";

const CardStyle = styled.figure`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    box-shadow: 10px 10px 20px 5px rgba(0,0,0,0.15);
    background-image: 
        url(${props=>props.theme.logo.name}),
        url(${props=>props.theme.logo.symbol}),
        linear-gradient(
            ${props => props.theme.background.gradient.light},
            ${props => props.theme.background.gradient.medium},
            ${props => props.theme.background.gradient.dark}
        );
    background-repeat: no-repeat, no-repeat, repeat;
    background-position: 5% 5% , 95% 5%;
    background-size: 20%, 5%;
    width: 100%;
    height: 324px;
    padding: var(--spacing-xg) var(--spacing-sm) var(--spacing-sm) var(--spacing-sm);

    img{
        width: 200px;
        height: 200px;
        padding-right: var(--spacing-rg);
    }
    figcaption{
        display: flex;
        flex-direction: column;
        text-align: left;
    }
    figcaption h3{
        font-size: var(--size-rg);
        font-weight: var(--weight-extraBold);
        color: ${props => props.theme.text.secondary};
        margin: var(--spacing-sm) 0;
    }
    figcaption span{
        font-size: var(--size-sm);
        font-weight: var(--weight-bold);
        color: ${props => props.theme.text.secondary};
        margin: var(--spacing-xs) 0;
    }

    @media screen and (max-width: 768px){
        &{
            flex-direction: column;
            height: 100%;
        }
        figcaption{
            text-align: center;
        }
        img{
            padding: 0;
        }
    }
    @media screen and (max-width: 360px){
        &{
            background-size: 50%, 15%;
        }
    }
`

export default CardStyle