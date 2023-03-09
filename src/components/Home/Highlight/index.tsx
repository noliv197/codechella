import Button from "../../Button"
import HighlightStyle from "./HighlightStyle"

function Highlight(){
    return(
        <HighlightStyle>
            <img src="./img/summer-bkg.jfif" alt="Pessoas assistindo um show" />
            <figcaption>
                <h4>
                    {'<'} 11 e 12 de Março {'>'} <br />
                    Aluródromo de São Paulo
                </h4>
                <p>
                    Hora de programar nossa memória com novas lembranças! 
                    Uma nova experiência sobre música, linguagens e, claro, tecnologia!
                    Somos um festival diverso, com vários artistas e referências. 
                    Divirta-se!
                </p>
                <Button icon="ticket">Comprar ingresso!</Button>
            </figcaption>
        </HighlightStyle>
    )
}

export default Highlight