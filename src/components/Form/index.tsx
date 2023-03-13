import Button from "../Button"
import Field from "./Field"
import FormStyle from "./FormStyled"
import Select from "./Select"
import Ticket from "../../app/ticket"
import { useState } from "react"

function Form(){
    const [name,setName] = useState('')
    const [email, setEmail] = useState('')
    const [type, setType] = useState('')
    const [date, setDate] = useState('')

    function saveOnServer(event: any){
        event.preventDefault()
        new Ticket().addTicket(
            name,
            email,
            type,
            new Date(date)
        )
    }

    return(
        <FormStyle onSubmit={saveOnServer}>
            <h2>Preencha o formulário a seguir:</h2>
            <Field
                type="text"
                label="Nome Completo:"
                id="nome"
                required={true}
                value={name}
                setFunction={setName}
            />
            <Field
                type="email"
                label="Email:"
                placeholder="exemplo@gmail.com"
                id="email"
                required={true}
                value={email}
                setFunction={setEmail}
            />
            <div className="container">
                <Select
                    label="Tipo de ingresso:"
                    id="tipo"
                    placeholder="Tipo de ingresso:"
                    required={true}
                    itens={[
                        "Pista Premium",
                        "Pista Comum",
                        "Cadeiras Térreo",
                        "Cadeiras Superiores",
                        "Rampas"
                    ]}
                    value={type}
                    setFunction={setType}
                />
                <Field
                    type="date"
                    label="Data de nascimento:"
                    id="data"
                    placeholder="dd/mm/aaaa"
                    required={true}
                    value={date}
                    setFunction={setDate}
                />
            </div>
            <Button icon="arrow" type="submit">Avançar</Button>
        </FormStyle>
    )
}

export default Form