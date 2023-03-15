import Server from "./server"
import uuid from 'react-native-uuid';

export default class Ticket{
    private server = new Server()

    public async addTicket(
        name: string, 
        email: string, 
        sector: string,
        showDate: string,
        cpf: string, 
        birthDate: string 
        ){
        let key = uuid.v4() 
        await this.server.postTicket(
            name,
            email,
            sector,
            showDate,
            cpf,
            birthDate,
            key
        )
        // window.location.href = `/success?id=${key}`
    }
    public async detailTicket(id: string | null){
        try{
            const data = await this.server.getTicket(id)
            console.log(new Date(data.date))
            return(
                {
                    name: data.name,
                    type: data.type,
                    date: data.date
                }
            )
        }catch(err){
            console.log(err)
        }
    }

}