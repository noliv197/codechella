import styled from "styled-components";

const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 795px;
    margin: 0 auto;
    padding: var(--spacing-md);
    h2{
        text-align: center;
        font-size: var(--size-lg);
        font-weight: var(--weight-extraBold);
        font-family: var(--font-secondary);
        color: ${props=> props.theme.text.secondary};
        margin-bottom: var(--spacing-sm);
    }
    .container{
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    .container fieldset{
        width: 45%;
    }
`

export default FormStyle