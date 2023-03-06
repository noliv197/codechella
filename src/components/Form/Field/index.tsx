import { FieldStyle } from "./FieldStyle"

interface IProps{
    type: string
    label: string
    id: string
    placeholder?: string
    required: boolean
}

function Field(props: IProps){
    return(
        <FieldStyle>
            <label htmlFor={props.id}>{props.label}</label>
            <input 
                id={props.id}
                type={props.type} 
                required={props.required} 
                placeholder={props.placeholder}
            />
        </FieldStyle>
    )
}

export default Field 