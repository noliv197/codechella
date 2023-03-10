import CardStyle from "./CardStyle"

interface IProps{
    url: string
    alt: string
    title: string
    text: string
}

function Card(props: IProps){
    return(
        <CardStyle>
            <img src={props.url} alt={props.alt} />
            <figcaption>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </figcaption>
        </CardStyle>
    )
}

export default Card