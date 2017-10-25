export class Location{
    type:string;
    coordinates:number[];
}

export class Reserver{
    nombre:string;
    celular:string;
}

export class Reserve{
    inicio:Date;
    fin:Date;
    usuario:Reserver;
}

export class Table{
    numero:number;
    reserva:Reserve;
}

export class Restaurant{
    _id:string;
    nombre:string;
    direccion:string;
    contacto:string;
    imagen:string;
    localizacion:Location;
    mesas:Table[];
}