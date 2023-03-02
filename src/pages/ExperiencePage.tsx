import Banner from "../components/Banner"
import Experience from "../components/Experience"
function ExperiencePage(){
    return(
        <main>
            <Banner 
                url="./img/banner-1.jfif"
                top="25%"
                content="A experiência"
            />
            <Experience/>
        </main>
    )
}

export default ExperiencePage