import styled from "styled-components";

const InformationStyle = styled.section`
    width: 65%;
    margin: 0 auto;
    text-align: center;
    h2{
        font-size: var(--size-lg);
        font-family: var(--font-secondary);
        font-weight: var(--weight-extraBold);
        color: ${props => props.theme.text.secondary};
        margin: var(--spacing-md);
    }
`

export default InformationStyle