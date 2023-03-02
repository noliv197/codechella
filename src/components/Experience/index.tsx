import Card from "./Card"
import ExperienceStyle from "./ExperienceStyle"

function Experience(){
    return(
        <ExperienceStyle>
            <ul>
                <Card 
                    url="./img/accessibility.jfif"
                    title="Acessibilidade e inclusão"
                    text="Nosso evento tenta abraçar um público mais amplo em todos os sentidos, de todas as idades, corpos, gostos e pensamentos!  Isso está presente no  espaço físico, na sinalização, no treinamento da equipe de apoio, na comunicação em libras, braile, visual e tátil. Além disso, dispomos de ingressos gratuitos para pessoas com deficiência e acompanhantes, pessoas idosas e crianças!"
                />
                <Card 
                    url="./img/sustainability.jfif"
                    title="Sustentabilidade"
                    text="Queremos estar aqui celebrando daqui a 50, 100 anos! Por isso, levamos o futuro do nosso planeta a sério. Nosso festival é carbono zero, com utilização de copos retornáveis, coleta e destinação adequada de resíduos, e transporte coletivo."
                />
                <Card 
                    url="./img/attractions.jfif"
                    title="Atrações"
                    text="Intervenções artísticas e culturais para todos os gostos! Durante os intervalos dos shows, nossa experiência contará com recreação para crianças, oficina de cerâmica, origami, circo e aquarela! Além disso, nosso espaço contra com 3 praças de alimentação, roda gigante e outros brinquedos!"
                />
            </ul>
        </ExperienceStyle>
    )
}

export default Experience