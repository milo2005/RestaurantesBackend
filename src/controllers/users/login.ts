import { userService } from '../../services/user-service';
import { ResponseBody } from '../common/response-body';
import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { config } from '../../config/global';

export interface LoginBody {
    email: string;
    password: string;
}

export function login(req: Request, res: Response, next) {
    let body: LoginBody = req.body;
    userService.login(body.email, body.password)
        .then(result => {
            if (result) {

                let token = sign({ id: result._id },
                    config.secret,{expiresIn:"1h"});

                res.send(new ResponseBody(true));
            }
            else res.send(new ResponseBody(false));
        })
        .catch(err => res.status(500)
            .send(new ResponseBody(false, null, err)));
}