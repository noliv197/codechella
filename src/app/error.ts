export default class Error{
    private types : Array<string>
    private messages: {
        name: Object
        email: Object
        sector: Object
        date: Object
    }
    constructor(){
        
        this.types = [
            'valueMissing',
            'badInput',
            'patternMismatch',
            'customError'
        ];
        
        this.messages = {
            name:{
                valueMissing: 'Esse campo não pode estar vazio',
                patternMismatch: 'Nome'
            },
            email: {
                valueMissing: 'Esse campo não pode estar vazio.',
                patternMismatch: 'Email inválido'
            },
            sector:{
                customError: 'Selecione um tipo de ingresso'
            },
            date: {
                badInput: 'Data não é válida',
                valueMissing: 'Esse campo não pode estar vazio',
                customError: 'Só para maiores de 18',
            }
        };

    }

    showError(element:HTMLInputElement | HTMLSelectElement, type: "name"|"email"|"sector"|"date"){
        let message = '';
        this.types.forEach((err: string) => {
            if(element.validity[err]){
                message = this.messages[type][err];
            }
        });
        return message;
    }   
}