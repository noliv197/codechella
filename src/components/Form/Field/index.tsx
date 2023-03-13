import { FieldStyle } from "./FieldStyle"

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
            />
        </FieldStyle>
    )
}

export default Field 