import Banner from "../components/Banner"

function HomePage(){
    return(
        <main>
            <Banner 
                url="./img/summer-main.jfif"
                top="45%"
                content="Boas-vindas ao #CodeChella2023!"
            />
            ola
            <Banner 
                url="./img/summer-bottom.jfif"
                top="45%"
            />
        
        </main>
    )
}

export default HomePage