import Banner from "../components/Banner"
import Experience from "../components/Experience"
function ExperiencePage(){
    document.title = 'Codechella - A experiência'
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