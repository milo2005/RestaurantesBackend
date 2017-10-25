import { Con } from './db-connection';
import { Collection } from 'mongodb';
import { User } from './common/user';

class UserService {

    private db: Collection<User> = Con.db
        .collection("users");

    login(email: string, pass: string){
        return this.db.findOne({
            email: email,
            password: pass
        });
    }

    signin(user:User){
        return this.db.findOne({email:user.email})
            .then(usr=>{
                if(usr == null){
                   return this.db.insertOne(user);
                }else{
                   return Promise.reject("Usuario ya existente");
                }
            });
    }

}

export const userService = new UserService();