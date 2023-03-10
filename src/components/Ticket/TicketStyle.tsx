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

    @media screen and (max-width: 768px){
        &{
            width: 90%;
            padding: var(--spacing-sm);
        }
    }
    @media screen and (max-width: 360px){
        &{
            padding: var(--spacing-sm) 0;
        }
        h2{
            margin: var(--spacing-md) 0;
        }
    }
`

export default TicketStyle
