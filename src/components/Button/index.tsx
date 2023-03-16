import {ButtonStyle, ButtonLinkStyle} from "./ButtonStyle"
import {AiOutlineArrowRight} from "react-icons/ai"
import {FaTicketAlt} from "react-icons/fa"

interface IProps{
    children: string
    icon: string
    type: "button" | "submit" | "reset" | undefined
    onclick?: (event:any) => void
    onsubmit?: (event:any) => void
    url?: string
}

function Button(props: IProps){
    if (props.type === undefined)
        return(
            <ButtonLinkStyle href={props.url}>
                {props.children}
            {
                props.icon === "arrow" ? 
                <AiOutlineArrowRight/> :
                <FaTicketAlt/>
            } 
            </ButtonLinkStyle> 
    )
    else{
        return(
            <ButtonStyle type={props.type}>
                {props.children}
            {
                props.icon === "arrow" ? 
                <AiOutlineArrowRight/> :
                <FaTicketAlt/>
            } 
            </ButtonStyle> 
        )
    }
}

export default Button