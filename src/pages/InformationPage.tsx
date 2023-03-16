import Banner from "../components/Banner"
import Information from "../components/Information"

function InformationPage(){
    document.title = 'Codechella - Informações'
    return(
        <main>
            <Banner 
                url="./img/banner-3.jfif"
                top="65%"
                content="Informações Gerais"
            />
            <Information/>
        </main>
    )
}

export default InformationPage