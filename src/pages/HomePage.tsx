import Banner from "../components/Banner"
import Home from "../components/Home"

function HomePage(){
    document.title = 'Codechella - Homepage'
    return(
        <main>
            <Banner 
                url="./img/summer-main.jfif"
                top="45%"
                content="Boas-vindas ao #CodeChella2023!"
            />
            <Home/>
            <Banner 
                url="./img/summer-bottom.jfif"
                top="45%"
            />
        
        </main>
    )
}

export default HomePage