import NavbarStyled from "./NavbarStyle"
function Navbar(){
    return(
        <NavbarStyled>
            <ul>
                <li>
                    <a href="/experience">A experiência</a>
                </li>
                <li>
                    <a href="/sectors">Mapa de setores</a>
                </li>
                <li>
                    <a href="/information">Informações</a>
                </li>
                <li>
                    <a href="/ticket">Ingresso</a>
                </li>
            </ul>
        </NavbarStyled>
    )
}

export default Navbar