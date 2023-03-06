import SelectStyle from "./SelectStyle"

interface IProps{
    label: string
    id: string
    placeholder?: string
    required: boolean
    itens: Array<string>
}

function Select(props: IProps){
    return(
        <SelectStyle>
            <label htmlFor={props.id}>{props.label}</label>
            <select id={props.id} required={props.required}>
                <option>{props.placeholder}</option>
                {props.itens.map(item => 
                    <option key={item}>{item}</option>)
                }
            </select>
        </SelectStyle>
    )
}

export default Select