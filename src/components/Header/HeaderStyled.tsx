import styled from "styled-components";

const HeaderStyled = styled.header`
    background-color: ${props => props.theme.background.primary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--spacing-xs);

    img{
        filter: ${props => props.theme.filter.primary};
    }
`

export default HeaderStyled