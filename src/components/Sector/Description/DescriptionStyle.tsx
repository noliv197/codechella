import styled from "styled-components";

const DescriptionStyle = styled.section`
    text-align: center;
    padding: ${props=>props.theme.spacing.rg};
    h2{
        font-size: ${props=>props.theme.typography.size.md};
        font-weight: ${props=>props.theme.typography.weight.extraBold};
        margin: ${props=>props.theme.spacing.md} 0;
        color: ${props=> props.theme.colors.summer.text.secondary};
    }
    ul{
        display: flex;
        align-items: start;
        justify-content: space-between;
        min-height: 500px;
        padding: 0 ${props=>props.theme.spacing.md};
    }
    ul li:nth-child(even){
        align-self: end;
    }
    li{
        display: flex;
        flex-direction: column;
        width: 380px;
    }
    li div{
        width: 100%;
        height: 230px;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 16px;
    }
    li h3{
        font-size: ${props=>props.theme.typography.size.rg};
        font-weight: ${props=>props.theme.typography.weight.bold};
        margin: ${props=>props.theme.spacing.sm} 0;
        color: ${props=> props.theme.colors.summer.text.secondary};
    }
    li p{
        font-size: ${props=>props.theme.typography.size.xs};
        color: ${props=> props.theme.colors.summer.text.secondary};
        padding: 0 ${props=>props.theme.spacing.sm};
        line-height: 24px;
    }
`

export default DescriptionStyle