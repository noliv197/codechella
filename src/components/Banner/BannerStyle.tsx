import styled from "styled-components";

const BannerStyle = styled.section`
    box-sizing: border-box;
    width: 100%;
    height: 350px;
    text-align: center;
    position: relative;
    
    div{
        opacity: .25;
        background-repeat: no-repeat;
        background-size: cover;
        background-position-X: center;
        width: 100%;
        height: 100%;
    }
    
    h1{
        font-size: var(--size-lg);
        font-weight: var(--weight-extraBold);
        position: absolute;
        top: calc((350px - 48px) /2);
        right: 0;
        left: 0;
    }

    @media screen and (max-width: 768px){
        h1{
            top: calc((350px - 96px) /2);
        }
    }
    @media screen and (max-width: 442px){
        h1{
            font-size: var(--size-rg);
            top: calc((350px - 64px) /2);
        }
    }
`

export default BannerStyle