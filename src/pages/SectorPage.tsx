import Banner from "../components/Banner"
import Sector from "../components/Sector"

function SectorPage(){
    document.title = 'Codechella - Mapa de setores'
    return(
        <main>
            <Banner 
                url="./img/banner-2.jfif"
                top="95%"
                content="Mapa de Setores"
            />
            <Sector/>
        </main>
    )
}

export default SectorPage