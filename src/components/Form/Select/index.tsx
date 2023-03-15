import SelectStyle from "./SelectStyle"
import Validation from "../../../app/validation"
interface IProps{
    label: string
    id: string
    placeholder?: string
    required: boolean
    itens: Array<string>
    value: string
    setFunction: React.Dispatch<React.SetStateAction<string>>
}

function Select(props: IProps){
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
    }
    return(
        <SelectStyle>
            <label htmlFor={props.id}>{props.label}</label>
            <select 
                id={props.id} 
                required={props.required}
                value={props.value}
                onChange={changeValue}
                onBlur={validate}
            >
                {props.itens.map(item => 
                    <option key={item}>{item}</option>)
                }
            </select>
            <span></span>
        </SelectStyle>
    )
}

export default Select