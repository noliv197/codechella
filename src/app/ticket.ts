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
        let key = uuid.v4() 
        await this.server.postTicket(
            name,
            email,
            type,
            date,
            key
        )
        window.location.href = `/success?id=${key}`
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