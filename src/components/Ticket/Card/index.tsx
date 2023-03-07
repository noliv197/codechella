import CardStyle from "./CardStyle"

interface IProp{
    url: string
    name: string
    sector: string
    date: string
    place: string
}

function Card(props: IProp){
    return(
        <CardStyle>
            <img src={props.url} alt="Qr Code" />
            <figcaption>
                <h3>{props.name}</h3>
                <span>Ingresso Cortesia</span>
                <span>{`Setor ${props.sector}`}</span>
                <span>{`Data: ${props.date}`}</span>
                <span>{`Local: ${props.place}`}</span>
            </figcaption>
        </CardStyle>
    )
}

export default Card