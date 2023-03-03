import Description from "./Description"
import Map from "./Map"
import SectorStyled from "./SectorStyle"

function Sector(){
    return(
        <SectorStyled>
            <Map/>
            <Description/>
        </SectorStyled>
    )
}

export default Sector