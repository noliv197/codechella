import Error from "./error"
interface IValidators{
    sector: (element: HTMLSelectElement) => void
    birthDate: (element: HTMLInputElement) => void
    cpf: (element: HTMLInputElement) => void
}
export default class Validation{
    private validators: IValidators
    constructor(){
        this.validators = {
            sector: element => this.validateSector(element),
            birthDate: element => this.validateBirthDate(element),
            cpf: element => this.validateCPF(element)
        }
    }
    validate(element: HTMLInputElement | HTMLSelectElement, type: string){
        // Custom Validity
        if(type in this.validators){
            this.validators[type](element)
        }
        //errorMessage
        if(element.validity.valid){
            element.classList.remove('invalid')
            element.classList.add('valid')
            return ""
        }else{
            element.classList.remove('valid')
            element.classList.add('invalid')
            return new Error().showError(element, type)
        }
    } 

    validateSector(element: HTMLSelectElement){
        let message  = ""
        console.log(element.value)
        if(element.value === ' '){
            message = 'Escolha um tipo de ingresso'
        }
        element.setCustomValidity(message)
    }
    validateBirthDate(element: HTMLInputElement){
        let message = ''
        let currentDate = new Date();
        let birthDate = Date.parse(Date()) - Date.parse(element.value);
        currentDate.setTime(birthDate);
        let age = currentDate.getFullYear() - 1970;
        if(age < 18){
            message = 'Você é menor de idade'
        }
        element.setCustomValidity(message)
    }
    validateCPF(element: HTMLInputElement){
        let message = ''
        let valid = new CPF().isValid(element.value)
        if (!valid){
            message = 'CPF inválido'
        }
        element.setCustomValidity(message)
    }
}

class CPF{
    private invalidCPF: Array<string>
    constructor(){
        this.invalidCPF = [
            "11111111111",
            "22222222222",
            "33333333333",
            "44444444444",
            "55555555555",
            "66666666666",
            "77777777777",
            "88888888888",
            "99999999999",
            "00000000000"
        ]
    }

    public isValid(cpf: string){
        cpf = cpf.replaceAll(/\./g,'').replace(/-/,'')
        if (this.invalidCPF.includes(cpf)){
            return false
        }
        let firstValidator = this.getValidator(10,cpf)
        let secondValidator = this.getValidator(11,cpf)
        let verifier = String(firstValidator) + String(secondValidator)
        if (verifier !== cpf.slice(9)){
            return false
        }
        return true
    }
    getValidator(range:number, cpf:string){
        let sum = this.digitsSum(range, cpf)
        let rest = sum % 11
        let validator = 11 - rest 
        if (validator >= 10) validator = 0
        return validator
    }
    digitsSum(range:number, cpf:string){
        let sum = 0
        let index = 0
        for (let multiplier = range; multiplier > 1 ; multiplier--){
            sum += multiplier * parseInt(cpf[index])
            index++
        }
        return sum
    }
}