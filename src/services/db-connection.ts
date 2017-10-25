import { config } from '../config/global';
import { MongoClient, Db } from 'mongodb';

class DBConnection {

    db: Db;

    constructor() {

        const connection = config.database.host
            + ":" + config.database.port
            + "/" + config.database.database;

        MongoClient.connect(connection)
            .then(db => {
                this.db = db;
                db.collection("restaurants")
                    .createIndex({localizacion:"2dsphere"});
            })
            .catch(err => console.log(err))
    }

}

export const Con = new DBConnection();