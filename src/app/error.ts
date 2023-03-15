export default class Error{
    private types : Array<string>
    private messages: {
        name: Object
        email: Object
        cpf: Object
        sector: Object
        birthDate: Object
        showDate: Object
    }
    constructor(){
        
        this.types = [
            'customError',
            'patternMismatch',
            'valueMissing',
            'badInput',
        ];
        
        this.messages = {
            name:{
                valueMissing: 'Esse campo não pode estar vazio',
                patternMismatch: 'Nome inválido'
            },
            email: {
                valueMissing: 'Esse campo não pode estar vazio',
                patternMismatch: 'Email inválido'
            },
            sector:{
                customError: 'Selecione um tipo de ingresso'
            },
            showDate:{
                customError: 'Selecione uma data'
            },
            cpf:{
                valueMissing: 'Esse campo não pode estar vazio',
                patternMismatch: 'CPF inválido',
                customError: 'CPF não é inválido'
            },
            birthDate: {
                badInput: 'Data não é válida',
                valueMissing: 'Esse campo não pode estar vazio',
                customError: 'Só para maiores de 18',
            }
        };

    }

    showError(element:HTMLInputElement | HTMLSelectElement, type: string){
        let message = '';
        this.types.forEach((err: string) => {
            console.log(err)
            if(element.validity[err]){
                message = this.messages[type][err];
            }
        });
        return message;
    }   
}