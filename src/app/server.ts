export default class Server{
    private url: string
    constructor(){
        this.url = "https://codechella-server.vercel.app/tickets"
    }

    public async getAll() { 
        try{
            const conexao = await fetch(this.url)
            const conexaoConvertida = await conexao.json()
            return conexaoConvertida
        }
        catch(err){
            console.log(err)
        }
    }
    public async getTicket(id: string | null){
        try{
            const connection = await fetch(`${this.url}/${id}`) 
            const connectionConverted = await connection.json()
            return connectionConverted
        }
        catch(err){
            console.log(err)
        }
    }
    public async postTicket(
        name: string, 
        email: string, 
        sector: string,
        showDate: string,
        cpf: string, 
        birthDate: string, 
        id: string | number[]
        ){
        try{
            // const connection = await fetch(this.url,{
            //     method: "POST",
            //     headers: {
            //         "Content-type": "application/json",
            //         'Accept': 'application/json'
            //     },
            //     body: JSON.stringify({
            //         name: name, 
            //         email: email, 
            //         cpf: cpf, 
            //         birthDate: birthDate, 
            //         sector: sector,
            //         showDate: showDate,
            //         id: id
            //     })
            // })
            // const connectionConverted = await connection.json()
            // return connectionConverted
            console.log(
                JSON.stringify({
                    name: name, 
                    email: email, 
                    cpf: cpf, 
                    birthDate: birthDate, 
                    sector: sector,
                    showDate: showDate,
                    id: id
                })
            )
        }
        catch(err){
            console.log(err)
        }
    }
}