import styled from "styled-components";

const SelectStyle = styled.fieldset`
    width: 100%; 
    padding: var(--spacing-sm) 0;
    label{
        display: block;
        font-size: var(--size-rg);
        font-weight: var(--weight-extraBold);
        color: ${props=> props.theme.text.secondary};
        margin-bottom: var(--spacing-sm);
    }   
    select{
        width: 100%;
        height: 48px;
        border: none;
        padding: var(--spacing-xs);
        box-sizing: border-box;
        font-size: var(--size-xs);
        color: ${props=> props.theme.text.secondary};
    }
`

export default SelectStyle