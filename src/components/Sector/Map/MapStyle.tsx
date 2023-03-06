import styled from "styled-components";

const MapStyle = styled.figure`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 70%;
    margin: 0 auto;
    img{
        width: 600px;
        height: auto;
    }
    h3{
        font-size: var(--size-rg);
        font-weight: var(--weight-bold);
        color: ${props=> props.theme.text.secondary};
        margin-bottom: var(--spacing-sm);
    }
    figcaption{
        flex-grow: 1;
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
`

export default MapStyle