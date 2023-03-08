import DropDownStyle from "./DropDownStyle"
import {RiArrowDownSFill} from "react-icons/ri"

interface IProps{
    title: string
    content: string
}

function DropDown(props: IProps){
    return(
        <DropDownStyle>
            <summary>
                {props.title}
                <RiArrowDownSFill/>
            </summary>
            <p>{props.content}</p>
        </DropDownStyle>
    )
}

export default DropDown