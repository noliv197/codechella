import { FieldStyle } from "./FieldStyle"
import Validation from "../../../app/validation"

interface IProps{
    type: string
    label: string
    id: string
    placeholder?: string
    pattern?: string
    length?: number
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
                placeholder={props.placeholder}
                value={props.value}
                pattern={props.pattern}
                required={props.required} 
                onChange={changeValue}
                onBlur={validate}
            />
            <span></span>
        </FieldStyle>
    )
}

export default Field 