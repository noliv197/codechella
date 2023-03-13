import SelectStyle from "./SelectStyle"

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
    return(
        <SelectStyle>
            <label htmlFor={props.id}>{props.label}</label>
            <select 
                id={props.id} 
                required={props.required}
                value={props.value}
                onChange={changeValue}
            >
                <option>{props.placeholder}</option>
                {props.itens.map(item => 
                    <option key={item}>{item}</option>)
                }
            </select>
        </SelectStyle>
    )
}

export default Select