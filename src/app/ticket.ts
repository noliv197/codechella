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
        let qrcode = `https://api.qrserver.com/v1/create-qr-code/?data=${key}`
        await this.server.postTicket(
            name,
            email,
            sector,
            showDate,
            cpf,
            birthDate,
            qrcode,
            key
        )
        window.location.href = `/success?id=${key}`
    }
    public async detailTicket(id: string | null){
        try{
            const data = await this.server.getTicket(id)
            return(
                {
                    qrcode: data.qrcode,
                    name: data.name,
                    type: data.sector,
                    date: data.showDate
                }
            )
        }catch(err){
            console.log(err)
        }
    }

}