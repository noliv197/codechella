import styled from "styled-components";

const HamburgerStyle = styled.nav`
    display: none;
    box-sizing: border-box;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: var(--spacing-xs);

    a{
        color: ${props => props.theme.text.primary};
        padding: var(--spacing-sm) 0;
        width: 100%;
    }
    a:not(:last-child){
        border-bottom: 1px solid ${props => props.theme.text.primary};

    }
    a:hover{
        text-decoration: underline;
        background-color: ${props => props.theme.background.light};
        color: ${props => props.theme.text.secondary};
    }

    &.visible-flex{
		display:flex;
	}
	&.invisible{
		display:none;
	}
`

export default HamburgerStyle