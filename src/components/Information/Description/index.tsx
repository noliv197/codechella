import DropDown from "../DropDown"
import DescriptionStyle from "./DescriptionStyle"

function Description(){
    const questions = [
        {
            id: 1,
            title:"Quais serão as atrações?",
            content: `Teremos dois dias de shows, 
            o primeiro (11/03) com bandas de rock, 
            e o segundo (12/03) com bandas pop. 
            Confira o line-up em detalhes clicando neste link!`
        },
        {
            id: 2,
            title:"Qual é a classificação etária?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            id: 3,
            title:"Quais são os setores disponíveis?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            id: 4,
            title:"Quais são os itens proibidos?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            id: 5,
            title:"Quais são os itens proibidos?",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
    ]
    return(
        <DescriptionStyle>
            {questions.map(question => 
                <DropDown key={question.id}
                    title={question.title} 
                    content={question.content}
                />
            )}
          
        </DescriptionStyle>
    )
}

export default Description