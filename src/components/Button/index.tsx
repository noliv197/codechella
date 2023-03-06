import ButtonStyle from "./ButtonStyle"
import {AiOutlineArrowRight} from "react-icons/ai"
import {FaTicketAlt} from "react-icons/fa"

interface IProps{
    children: string
    icon: string
}

function Button(props: IProps){
    return(
        <ButtonStyle>
            {props.children}
           {
                props.icon === "arrow" ? 
                <AiOutlineArrowRight/> :
                <FaTicketAlt/>
            } 
        </ButtonStyle>
    )
}

export default Button