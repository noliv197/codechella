import Card from "./Card"
import TicketStyle from "./TicketStyle"

function Ticket(){
    return(
        <TicketStyle>
            <h2>
                Uhul, agora sim! 
                Seu ingresso está aqui, apresente na entrada do evento e divirta-se!
            </h2>
            <Card
                url="./img/qrcode.png"
                name="Monica Hillman"
                sector="Pista"
                date="11/03"
                place="São Paulo-SP"
            />
        </TicketStyle>
    )
}

export default Ticket