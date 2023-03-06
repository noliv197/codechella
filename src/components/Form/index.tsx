import Button from "../Button"
import Field from "./Field"
import FormStyle from "./FormStyled"
import Select from "./Select"

function Form(){
    return(
        <FormStyle>
            <h2>Preencha o formulário a seguir:</h2>
            <Field
                type="text"
                label="Nome Completo:"
                id="nome"
                required={true}
            />
            <Field
                type="email"
                label="Email:"
                placeholder="exemplo@gmail.com"
                id="email"
                required={true}
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
                />
                <Field
                    type="date"
                    label="Data de nascimento:"
                    id="data"
                    placeholder="dd/mm/aaaa"
                    required={true}
                />
            </div>
            <Button icon="arrow">Avançar</Button>
        </FormStyle>
    )
}

export default Form