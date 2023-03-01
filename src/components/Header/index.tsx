import Navbar from "./Navbar";
import HeaderStyled from "./HeaderStyled";
function Header() {
    return (
      <HeaderStyled>
        <img src="./img/logo.svg" alt="Logo da Codechella" />
        <Navbar/>
      </HeaderStyled>
    );
  };
    
  export default Header;