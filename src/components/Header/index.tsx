import Navbar from "./Navbar";
import HeaderStyle from "./HeaderStyle";
import {GiHamburgerMenu} from "react-icons/gi"
import Hamburger from "./Hamburger";
import { useState } from 'react';

function Header() {
  const [menu, setMenu] = useState('close')
  const dropMenu = (menu: String) => {
    if (menu === 'open') 
      setMenu('close')
    else
      setMenu('open')
  }
    return (
      <HeaderStyle>
        <div>
          <a href="/"><img src="./img/logo.svg" alt="Logo da Codechella" /></a>
          <Navbar/>
          <button onClick={() => dropMenu(menu)}>
            <GiHamburgerMenu/>
          </button>
        </div>
        <Hamburger state={menu} setState={setMenu}/>
      </HeaderStyle>
    );
  };
    
  export default Header;