import * as socketIO from 'socket.io';
import {Server} from 'http';


export class TableIoService{

    init(server:Server){
        let io = socketIO(server);
        io.on("connection", (socket)=>{
            socket.emit("saludo",{hola:"Hola como estas"});
            socket.on("mensaje", (data)=>{
                console.log(JSON.stringify(data));
            });
        });
    }

}

export const tableIO = new TableIoService();