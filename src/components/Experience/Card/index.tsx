import CardStyle from "./CardStyle"

interface IProps{
    url: string
    title: string
    text: string
}

function Card(props: IProps){
    return(
        <CardStyle>
            <div className="image" style={{backgroundImage: `url(${props.url})`}}></div>
            <div className="container">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
        </CardStyle>
    )
}

export default Card