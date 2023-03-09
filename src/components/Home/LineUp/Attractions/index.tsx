import AttractionsStyle from "./AttractionsStyle"

interface IProps{
    date: string
    head: string
    line_1: Array<string>
    line_2: Array<string>
    line_3: Array<string>
}

function Attractions(props: IProps){
    return(
        <AttractionsStyle>
            <hr />
            <h3>{props.date}</h3>
            <h4>{props.head}</h4>
            <ul className="line-1">{props.line_1.map((item,index)=> 
                <li key={`1-${index}`}>{item}</li>)}
            </ul>
            <ul className="line-2">{props.line_2.map((item,index)=> 
                <li key={`2-${index}`}>{item}</li>)}
            </ul>
            <ul className="line-3">{props.line_3.map((item,index)=> 
                <li key={`3-${index}`}>{item}</li>)}
            </ul>
        </AttractionsStyle>
    )
}

export default Attractions