import styled from "styled-components";

const DropDownStyle = styled.details`
    width: 100%;
    text-align: left;
    margin: var(--spacing-xs) 0;
    summary{
        font-size: var(--size-rg);
        font-weight: var(--weight-extraBold);
        color: ${props => props.theme.text.primary};
        background-color: ${props => props.theme.background.primary};
        padding: var(--spacing-sm);
        cursor: pointer;
        position: relative;
    }
    summary::marker {
        display: none;
        content: "";
    }
    summary svg{
        position: absolute;
        right: var(--spacing-sm);
    }
    &[open] > summary svg{
        transform: rotate(180deg);
    }
    p{
        font-size: var(--size-sm);
        font-weight: var(--weight-bold);
        color: ${props => props.theme.text.secondary};
        background-color: ${props => props.theme.background.light};
        padding: var(--spacing-sm);
        line-height: 26px;
    }

    @media screen and (max-width: 360px){
        summary{
            font-size: var(--size-sm);
            padding: var(--spacing-sm) var(--spacing-xs);
        }
    }
`

export default DropDownStyle