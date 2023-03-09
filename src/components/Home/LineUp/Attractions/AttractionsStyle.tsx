import styled from "styled-components";

const AttractionsStyle = styled.div`
    margin: var(--spacing-lg) 0;
    text-align: center;   
    position: relative;
    
    hr{
        border: 1px solid ${props => props.theme.background.secondary};
        width: 85%;
        position: absolute;
        z-index: 0;
        top: 15px;
        right: 0;
        left: 0;
    }

    h3{
        display: inline;
        background-color: ${props=> props.theme.background.secondary};
        color: ${props => props.theme.text.primary};
        font-size: var(--size-lg);
        font-weight: var(--weight-normal);
        font-family: var(--font-secondary);
        padding: var(--spacing-xs);
        position: relative;
        z-index: 1;
    }

    h4{
        font-size: var(--size-lg);
        font-weight: var(--weight-extraBold);
        color: ${props => props.theme.text.secondary};
        margin-top: var(--spacing-lg);
    }

    ul{
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${props => props.theme.text.secondary};
        padding: var(--spacing-sm) 0;
    }
    ul li{
        padding: 0 var(--spacing-sm);
    }

    .line-1{
        font-size: var(--size-md);
        font-weight: var(--weight-extraBold);
    }
    .line-2{
        font-size: var(--size-rg);
        font-weight: var(--weight-bold);
    }
    .line-3{
        font-size: var(--size-sm);
        font-weight: var(--weight-bold);
    }
`

export default AttractionsStyle