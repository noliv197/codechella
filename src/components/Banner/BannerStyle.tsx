import styled from "styled-components";

const BannerStyle = styled.div`
    // background-image: url(${props => props.color});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-X: center;
    box-sizing: border-box;
    width: 100%;
    height: 350px;
    opacity: .5;
    text-align: center;
    padding: calc(350px / 2 - 50px);
    
    h1{
        // opacity: 1.5;
        width: 450px;
        margin: 0 auto;
        font-size: var(--size-lg);
        font-weight: var(--weight-extraBold);
    }
`

export default BannerStyle