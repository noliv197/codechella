import Button from "../Button"
import Field from "./Field"
import FormStyle from "./FormStyled"
import Select from "./Select"
import Ticket from "../../app/ticket"
import { useState } from "react"

function Form(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [showDate, setShowDate] = useState('')
    const [sector, setSector] = useState('')

    function saveOnServer(event: any){
        event.preventDefault()
        new Ticket().addTicket(
            name,
            email,
            sector,
            showDate,
            cpf,
            birthDate
        )
    }

    return(
        <FormStyle onSubmit={saveOnServer}>
            <h2>Preencha o formulário a seguir:</h2>
            <Field
                type="text"
                label="Nome Completo:"
                id="name"
                pattern="^([A-Za-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšž]+[,.]?[ ]?|[A-Za-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšž]+['-]?)+$"
                required={true}
                value={name}
                setFunction={setName}
            />
            <Field
                type="email"
                label="Email:"
                placeholder="exemplo@gmail.com"
                id="email"
                // pattern="^[A-Za-z0-9.]+@[a-z0-9]+\\.[a-z]+\\.([a-z]+)?$"
                required={true}
                value={email}
                setFunction={setEmail}
            />
            <div className="container">
                <Field
                    type="text"
                    label="CPF:"
                    id="cpf"
                    placeholder="xxx.xxx.xxx-xx"
                    pattern="^\d{3}(\.)?\d{3}(\.)?\d{3}(-)?\d{2}$"
                    required={true}
                    value={cpf}
                    setFunction={setCpf}
                />
                <Field
                    type="date"
                    label="Data de nascimento:"
                    id="birthDate"
                    placeholder="dd/mm/aaaa"
                    required={true}
                    value={birthDate}
                    setFunction={setBirthDate}
                />
            </div>
            <div className="container">
                <Select
                    label="Data do Show:"
                    id="showDate"
                    itens={[
                        "Sábado - 11/03",
                        "Domingo - 12/03"
                    ]}
                    required={true}
                    value={showDate}
                    setFunction={setShowDate}
                />
                <Select
                    label="Tipo de ingresso:"
                    id="sector"
                    placeholder="Tipo de ingresso:"
                    itens={[
                        "Pista Premium",
                        "Pista Comum",
                        "Cadeiras Térreo",
                        "Cadeiras Superiores",
                        "Rampas"
                    ]}
                    required={true}
                    value={sector}
                    setFunction={setSector}
                />
            </div>
            <Button icon="arrow" type="submit">Avançar</Button>
        </FormStyle>
    )
}

export default Form