import Card from "./Card"
import TicketStyle from "./TicketStyle"
import { useState } from "react"

function Ticket(){
    const [cardName, setCardName] = useState('Monica Hillman')
    const [cardType, setCardType] = useState('Pista')
    const [cardDate, setCardDate] = useState('11/03')
    return(
        <TicketStyle>
            <h2>
                Uhul, agora sim! 
                Seu ingresso está aqui, apresente na entrada do evento e divirta-se!
            </h2>
            <Card
                url="./img/qrcode.png"
                name={cardName}
                sector={cardType}
                date={cardDate}
                place="São Paulo-SP"
                setFunctions={{
                    name: setCardName,
                    type: setCardType,
                    date: setCardDate
                }}
            />
        </TicketStyle>
    )
}

export default Ticket