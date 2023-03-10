import classNames from "classnames";
import HamburgerStyle from "./HamburgerStyle"

interface IProps{
    state: string;
    setState: React.Dispatch<React.SetStateAction<string>>
}

function Hamburger(props: IProps){
    return(
        <HamburgerStyle className={classNames({
            'invisible': props.state === 'close',
            'visible-flex': props.state === 'open'
        })}>
            <a href="/experience">A experiência</a>
            <a href="/sectors">Mapa de setores</a>
            <a href="/information">Informações</a>
            <a href="/ticket">Ingresso</a>
        </HamburgerStyle>
    )
}

export default Hamburger