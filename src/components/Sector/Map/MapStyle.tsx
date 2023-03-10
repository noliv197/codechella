import styled from "styled-components";

const MapStyle = styled.figure`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 80%;
    margin: 0 auto;
    img{
        width: 100%;
        height: auto;
        max-width: 450px;
    }
    h3{
        font-size: var(--size-rg);
        font-weight: var(--weight-bold);
        color: ${props=> props.theme.text.secondary};
        margin-bottom: var(--spacing-sm);
    }
    figcaption{
        flex-grow: 1;
        // min-width: 388px;
    }
    li{
        display: flex;
        align-items: center;
        margin-bottom: var(--spacing-sm);
    }
    li div{
        width: 32px;
        height: 32px;
        margin-right: var(--spacing-sm);
    }
    li span{
        color: ${props=> props.theme.text.secondary};
    }

    @media screen and (max-width: 768px){
        &{
            flex-direction: column;
        }
    }
    @media screen and (max-width: 360px){
        &{
            width: 90%;
        }
    }
`

export default MapStyle