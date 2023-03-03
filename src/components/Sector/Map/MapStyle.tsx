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
        font-size: ${props=>props.theme.typography.size.rg};
        font-weight: ${props=>props.theme.typography.weight.bold};
        color: ${props=> props.theme.colors.summer.text.secondary};
        margin-bottom: ${props=> props.theme.spacing.sm};
    }
    figcaption{
        flex-grow: 1;
    }
    li{
        display: flex;
        align-items: center;
        margin-bottom: ${props=> props.theme.spacing.sm};
    }
    li div{
        width: 32px;
        height: 32px;
        margin-right: ${props=> props.theme.spacing.sm};
    }
    li span{
        color: ${props=> props.theme.colors.summer.text.secondary};
    }
`

export default MapStyle