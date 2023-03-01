import styled from "styled-components";

const HeaderStyled = styled.header`
    background-color: ${props => props.theme.colors.boreal.background.primary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${props => props.theme.spacing.xs};

    img{
        filter: ${props => props.theme.colors.boreal.filter.primary};
    }
`

export default HeaderStyled