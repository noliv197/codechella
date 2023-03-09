import Attractions from "./Attractions";
import LineUpStyle from "./LineUpStyle";

function LineUp(){
    let saturday = {
        date:"SÁBADO <11/03>",
        head: "System of a DOM",
        one:["Python Maiden","Apollo Client 2001","Bon Java","NickCallback"],
        two:["Linkin Promises","Fullstack Fighters","Papa React","Angular in Chains"],
        three:["Agnostic Front-end","SlipkNode","Pink Flutter","Kiss"]
    }
    let sunday = {
        date:"DOMINGO <12/03>",
        head: "Lana Del Ploy",
        one:["Dua Lib","The Backnd","CSS Styles","DJ Query","ArrayAna Grande"],
        two:["Miley Cypress","The Bootstrap Boys","CloudPlay","CloudPlay","Dev Lovato"],
        three:["Kylie MiLOG","Jenkins Brothers","Rubycat Dolls"]
    }
    return(
        <LineUpStyle>
            <h2>/Line-Up/</h2>
            <Attractions
                date={saturday.date}
                head={saturday.head}
                line_1={saturday.one}
                line_2={saturday.two}
                line_3={saturday.three}
            />
            <Attractions
                date={sunday.date}
                head={sunday.head}
                line_1={sunday.one}
                line_2={sunday.two}
                line_3={sunday.three}
            />
        </LineUpStyle>
    )
}

export default LineUp