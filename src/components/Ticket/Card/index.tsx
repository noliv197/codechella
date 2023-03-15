import CardStyle from "./CardStyle"
import Ticket from "../../../app/ticket"

interface IProp{
    url: string
    name: string
    sector: string
    date: string
    place: string
    setFunctions: {
        name: React.Dispatch<React.SetStateAction<string>>
        type: React.Dispatch<React.SetStateAction<string>>
        date: React.Dispatch<React.SetStateAction<string>>
    }
}

function Card(props: IProp){

    async function updateCard(){
        try{
            let id = new URL(String(window.location)).searchParams.get('id')
            if (id !== null){
                let data = await new Ticket().detailTicket(id)
                props.setFunctions.name(data?.name)
                props.setFunctions.type(data?.type)
                props.setFunctions.date(data?.date) 
            }
        }
        catch(err){
            console.log(err)
        }
    }
    updateCard()

    return(
        <CardStyle>
            <img src={props.url} alt="Qr Code" />
            <figcaption>
                <h3>{props.name}</h3>
                <span>Ingresso Cortesia</span>
                <span>{`Setor: ${props.sector}`}</span>
                <span>{`Data: ${props.date}`}</span>
                <span>{`Local: ${props.place}`}</span>
            </figcaption>
        </CardStyle>
    )
}

export default Card