import styled from "styled-components";

export const ButtonStyle = styled.button`
    border-radius: 16px;
    border: none;
    background-color: ${props => props.theme.background.primary};
    box-shadow: 3px 3px 0px 0px rgba(0,0,0,0.75);
    color: ${props => props.theme.text.primary};
    cursor: pointer;
    font-size: var(--size-sm);
    font-family: var(--font-primary);
    font-weight: var(--weight-bold);
    padding: var(--spacing-xs) var(--spacing-lg) var(--spacing-xs) var(--spacing-sm);
    position: relative;
    margin-top: var(--spacing-sm);

    svg{
        padding: 0 var(--spacing-xs);
        position: absolute;
        right: 10px;
        top: 10px;
    }

`

export const ButtonLinkStyle = styled.a`
    border-radius: 16px;
    background-color: ${props => props.theme.background.primary};
    box-shadow: 3px 3px 0px 0px rgba(0,0,0,0.75);
    color: ${props => props.theme.text.primary};
    font-size: var(--size-sm);
    font-family: var(--font-primary);
    font-weight: var(--weight-bold);
    padding: var(--spacing-xs) var(--spacing-lg) var(--spacing-xs) var(--spacing-sm);
    position: relative;
    margin-top: var(--spacing-sm);

    svg{
        padding: 0 var(--spacing-xs);
        position: absolute;
        right: 10px;
        top: 10px;
    }

`