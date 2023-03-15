import Error from "./error"
interface IValidators{
    sector: (element: HTMLSelectElement) => void
    date: (element: HTMLInputElement) => void
}
export default class Validation{
    private validators: IValidators
    constructor(){
        this.validators = {
            sector: (element: HTMLSelectElement) => this.validateSector(element),
            date: (element: HTMLInputElement) => this.validateDate(element)
        }
    }
    validate(element: HTMLInputElement | HTMLSelectElement, type: "name"|"email"|"sector"|"date"){
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
        if(element.value === 'Tipo de ingresso:'){
            message = 'Escolha um tipo de ingresso'
        }
        element.setCustomValidity(message)
    }
    validateDate(element: HTMLInputElement){
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

}

