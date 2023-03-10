import BannerStyle from "./BannerStyle"

interface IProp{
    content?: string
    url: string
    top: string

}

function Banner({content,url,top}: IProp){
    return(
        <BannerStyle>
            <div style={{
                backgroundImage: `url(${url})`, 
                backgroundPositionY:`${top}`}}
                >
            </div>
            <h1>{content}</h1>
        </BannerStyle>
    )
}

export default Banner