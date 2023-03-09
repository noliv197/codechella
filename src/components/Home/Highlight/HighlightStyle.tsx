import styled from "styled-components";

const HighlightStyle = styled.figure`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    padding: var(--spacing-md);

    img{
        width: 609px;
        height: 381px;
        border-radius: 16px; 
        object-fit: cover;
    }

    figcaption{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        text-align: center;
        padding-left: var(--spacing-xs);
    }

    figcaption h4{
        font-size: var(--size-rg);
        font-weight: var(--weight-extraBold);
        color: ${props => props.theme.text.secondary};
        margin-bottom: var(--spacing-xs);
        line-height: 26px;
    }
    figcaption p{
        font-size: var(--size-sm);
        font-weight: var(--weight-bold);
        color: ${props => props.theme.text.secondary};
        line-height: 30px;
    }
`

export default HighlightStyle   