import { Router } from 'express';
import { login, signin } from '../controllers/users/index';


const users: Router = Router();

users.post("/login", login);
users.post("/signin", signin);

export default users;
