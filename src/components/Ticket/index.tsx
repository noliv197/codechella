import Card from "./Card"
import TicketStyle from "./TicketStyle"
import { useState } from "react"

function Ticket(){
    const [cardName, setCardName] = useState('Monica Hillman')
    const [qrcode, setQrcode] = useState('./img/qrcode.png')
    const [cardSector, setCardSector] = useState('Pista')
    const [cardDate, setCardDate] = useState('11/03')
    return(
        <TicketStyle>
            <h2>
                Uhul, agora sim! 
                Seu ingresso está aqui, apresente na entrada do evento e divirta-se!
            </h2>
            <Card
                url={qrcode}
                name={cardName}
                sector={cardSector}
                date={cardDate}
                place="São Paulo-SP"
                setFunctions={{
                    qrcode: setQrcode,
                    name: setCardName,
                    sector: setCardSector,
                    date: setCardDate
                }}
            />
        </TicketStyle>
    )
}

export default Ticket