import MapStyled from "./MapStyle"

function Map(){
    const list = [
        {
            "color": "#0E7DF1",
            "name": "Pista Premium",
        },
        {
            "color": "#FE016E",
            "name": "Pista Comum",
        },
        {
            "color": "#01A89E",
            "name": "Cadeiras Térreo",
        },
        {
            "color": "#3F51B5",
            "name": "Cadeiras Superiores",
        },
        {
            "color": "#0E7DF1",
            "name": "Rampas",
        },
    ]
    return(
        <MapStyled>
                <img src="./img/sectors.png" alt="Mapa de setores" />
                <figcaption>
                    <h3>Legenda:</h3>
                    <ul>
                        {list.map(item => {
                            return (
                                <li key={item.name}>
                                    <div 
                                        style={{backgroundColor: `${item.color}`}}
                                    ></div>
                                    <span>{item.name}</span>
                                </li>
                            )
                        })}
                    </ul>
                </figcaption>
        </MapStyled>
    )
}

export default Map