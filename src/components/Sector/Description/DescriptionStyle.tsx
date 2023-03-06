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
    ul{
        display: flex;
        align-items: start;
        justify-content: space-between;
        min-height: 500px;
        padding: 0 var(--spacing-md);
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
        font-size: var(--size-rg);
        font-weight: var(--weight-Bold);
        margin: var(--spacing-sm) 0;
        color: ${props=> props.theme.text.secondary};
    }
    li p{
        font-size: var(--size-xs);
        color: ${props=> props.theme.text.secondary};
        padding: 0 var(--spacing-sm);
        line-height: 24px;
    }
`

export default DescriptionStyle