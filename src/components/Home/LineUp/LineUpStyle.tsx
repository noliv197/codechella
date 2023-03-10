import styled from "styled-components";

const LineUpStyle = styled.section`
    h2{
        color: ${props => props.theme.text.secondary};
        font-family: var(--font-secondary);
        font-size: var(--size-lg);
        font-weight: var(--weight-extraBold);
        text-align: center;
        margin: var(--spacing-md) 0;
    }
    @media screen and (max-width: 360px){
        h2{
            font-size: var(--size-rg);
        }
    }
`

export default LineUpStyle