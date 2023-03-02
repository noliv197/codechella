import styled from "styled-components";

const ExperienceStyle = styled.section`
    padding: ${props => props.theme.spacing.md};
    
    ul{
        display: flex;
        flex-direction: column;
        max-width: 85%;
        margin: 0 auto;
    }

`

export default ExperienceStyle