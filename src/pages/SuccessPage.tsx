import Banner from "../components/Banner"
import Ticket from "../components/Ticket"

function SuccessPage(){
    document.title = 'Codechella - Reserva'
    return(
        <main>
            <Banner 
                url="./img/banner-5.jfif"
                top="50%"
                content="Seu ingresso está aqui!"
            />
            <Ticket/>
        </main>
    )
}

export default SuccessPage