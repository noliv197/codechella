import FooterStyle from "./FooterStyle";
import {AiOutlineInstagram, AiOutlineTwitter} from "react-icons/ai"
import {BsTwitch, BsWhatsapp} from "react-icons/bs"

function Footer() {
    return (
      <FooterStyle>
        <section>
          <img src="./img/logo.svg" alt="Logo CodeChella"/>
          <div>
            <span>Acesse nossas redes: </span>
            <ul>
              <li>
                <a 
                  href="https://www.whatsapp.com" 
                  target={"_blank"} 
                  rel="noreferrer"
                > <BsWhatsapp/></a>
              </li>
              <li>
                <a 
                  href="https://www.twitch.tv" 
                  target={"_blank"} 
                  rel="noreferrer"
                ><BsTwitch/></a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com" 
                  target={"_blank"} 
                  rel="noreferrer"
                ><AiOutlineInstagram/></a>
              </li>
              <li>
                <a 
                  href="https://twitter.com" 
                  target={"_blank"} 
                  rel="noreferrer"
                ><AiOutlineTwitter/></a>
              </li>
            </ul>
          </div>
        </section>
        <section className="credits">
          <span>Desenvolvido por Natalia Oliveira</span>
          <span>Projeto fictício sem fins comerciais</span>
        </section>
      </FooterStyle>

    );
  };
    
export default Footer;