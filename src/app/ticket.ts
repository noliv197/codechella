import Server from "./server"
import uuid from 'react-native-uuid';

export default class Ticket{
    private server = new Server()

    public async addTicket(
        name: string, 
        email: string, 
        type: string, 
        date: Date 
        ){
        await this.server.postTicket(
            name,
            email,
            type,
            date,
            uuid.v4()
        )
        // window.location.href = `/success?id=${"RXSDF-2874982A-5SAS546S2"}`
    }
    public async detailTicket(id: string | null){
        try{
            const data = await this.server.getTicket(id)
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