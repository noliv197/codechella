export default class Server{
    private url: string
    constructor(){
        this.url = "https://codechella-server.vercel.app/tickets"
    }

    public async getTickets() { 
        const conexao = await fetch(this.url)
        const conexaoConvertida = await conexao.json()
        return conexaoConvertida
    }
    public async postTicket(
        name: string, 
        email: string, 
        type: string, 
        date: Date,
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
                //         name: "name",
                //         email: "email",
                //         type: "type",
                //         date: "date",
                //         id: "id"
                //     })
                // })
                // const connectionConverted = await connection.json()
                // return connectionConverted
                console.log(
                    JSON.stringify({
                        name: name,
                        email: email,
                        type: type,
                        date: date,
                        id: id
                    })
                )
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
}