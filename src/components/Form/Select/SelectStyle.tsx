import styled from "styled-components";

const SelectStyle = styled.fieldset`
    width: 100%; 
    padding: var(--spacing-sm) 0;
    min-height: 132px;
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
        font-size: var(--size-sm);
        color: ${props=> props.theme.text.secondary};
    }
    span{
        display: none;
    }
    span.show{
        display: block;
        margin-top: var(--spacing-sm);
        font-size: var(--size-sm);
        font-weight: var(--weight-extraBold);
        color: ${props=> props.theme.text.secondary};
    }
    select.invalid{
        border: 2px solid var(--color-invalid);
    }
    select.valid{
        border: 2px solid var(--color-valid);
    }
`

export default SelectStyle