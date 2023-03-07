import styled from "styled-components";

const TicketStyle = styled.section`
    width: 65%;
    margin: 0 auto;
    padding: var(--spacing-md);
    text-align: center;
    min-height: 500px;
    h2{
        font-size: var(--size-rg);
        font-weight: var(--weight-extraBold);
        color: ${props => props.theme.text.secondary};
        margin: var(--spacing-md);
    }
`

export default TicketStyle
