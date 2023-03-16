import Banner from "../components/Banner"
import Form from "../components/Form"

function TicketPage(){
    document.title = 'Codechella - Ingresso'
    return(
        <main>
            <Banner 
                url="./img/banner-4.jfif"
                top="35%"
                content="Garanta seu ingresso"
            />
            <Form/>
        </main>
    )
}

export default TicketPage