import { Con } from './db-connection';
import { Collection, ObjectID } from 'mongodb';
import { Restaurant, Table } from './common/restaurant';

class RestaurantService {

    db: Collection<Restaurant> = Con.db.collection("restaurants");

    insert(res: Restaurant) {
        return this.db.insertOne(res);
    }

    insertWithTables(res: Restaurant, numbertables: number) {
        let tables: Table[] = [];
        for (let i = 0; i < numbertables; i++) {
            tables.push({ numero: i + 1, reserva: null })
        }
        res.mesas = tables;
        return this.db.insertOne(res);
    }

    update(id: string, res: Restaurant) {
        return this.db.updateOne({ _id: new ObjectID(id) },
            { $set: res });
    }

    delete(id: string) {
        return this.db.deleteOne({ _id: new ObjectID(id) })
    }

    all(skip: number = 0, limit: number = 0) {
        return this.db.find()
            .skip(skip)
            .limit(limit)
            .toArray();
    }

    allByLocation(lon: number, lat: number, km: number = 1) {
        return this.db.find({
            localizacion: {
                $geoWithin: {
                    $centerSphere: [[lon, lat], km / 6378.1]
                }
            }
        })
            .toArray();
    }

    

}

export const restaurantService = new RestaurantService();