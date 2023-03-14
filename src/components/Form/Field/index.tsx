import { FieldStyle } from "./FieldStyle"
import Validation from "../../../app/validation"

interface IProps{
    type: string
    label: string
    id: string
    placeholder?: string
    required: boolean
    value: string
    setFunction: React.Dispatch<React.SetStateAction<string>>
}

function Field(props: IProps){
    function changeValue(event: any){
        props.setFunction(event.target.value)
    }
    function validate(event: any){
        let message = new Validation().validate(event.target, event.target.id)
        let errorText = event.target.nextSibling
        errorText.innerText = message
        if (message !== ""){
            errorText.classList.add('show')
        }else{
            errorText.classList.remove('show')
        }
        console.log()
    }
    return(
        <FieldStyle>
            <label htmlFor={props.id}>{props.label}</label>
            <input 
                id={props.id}
                type={props.type} 
                required={props.required} 
                placeholder={props.placeholder}
                value={props.value}
                onChange={changeValue}
                onBlur={validate}
                pattern={
                    props.id === 'email'? "^[A-Za-z0-9.]+@[a-z0-9]+\\.[a-z]+\\.([a-z]+)?$" : 
                    props.id === 'name'? "^([A-Za-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšž]+[,.]?[ ]?|[A-Za-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšž]+['-]?)+$": 
                    undefined
                }
            />
            <span></span>
        </FieldStyle>
    )
}

export default Field 