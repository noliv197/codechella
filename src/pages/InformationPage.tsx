import Banner from "../components/Banner"
import Information from "../components/Information"

function InformationPage(){
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