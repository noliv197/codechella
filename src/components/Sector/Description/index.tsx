import DescriptionStyle from "./DescriptionStyle";

function Description(){
    const list = [
        {
            img:"./img/track.jfif",
            title:"Pista",
            text:"Pista convencional, atendida pelos bares e banheiros das laterais do estádio. Espaço amplo, com local para sentar e descansar. Separada da pista premium por uma grade."
        },
        {
            img:"./img/premium.jfif",
            title:"Pista Premium",
            text:"Pista mais próxima do palco, com acesso muito próximo a banheiros e bares num raio de 100m. Todas as pessoas idosas e/ou com deficiência têm direito a acesso gratuito a essa área."
        },
        {
            img:"./img/chairs.jfif",
            title:"Cadeiras",
            text:"Opção de cadeiras térreas ou elevadas. Acesso próximo a banheiros e bares, visão um pouco elevada em relação às pistas."
        }
    ]
    return(
        <DescriptionStyle>
            <h2>Mais detalhes sobre os setores:</h2>
            <ul>
                {list.map(item=>{
                    return(
                        <li key={item.title}>
                            <div 
                                style={{backgroundImage:`url(${item.img})`}}
                            ></div>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </li>
                    )
                })}
            </ul>
        </DescriptionStyle>
    )
}

export default Description