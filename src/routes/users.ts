import { Router } from 'express';
import { login, signin } from '../controllers/users/index';


const users: Router = Router();
/**
 * @api {POST} /api/v1/users/login Inicio de Sesion
 * @apiName Login
 * @apiGroup Usuarios
 * @apiVersion 1.0.0
 * 
 * @apiUse LoginBody
 * 
 * @apiSuccess {Object} Respuesta Objeto JSON
 * @apiSuccess {Boolean} Respuesta.success True si las credenciales son correctas
 * @apiSuccess {String} Respuesta.data Token de sesion
 */
users.post("/login", login);

/**
 * @api {POST} /api/v1/users/signin Resgistro de Usuario
 * @apiName Signin
 * @apiGroup Usuarios
 * @apiVersion 1.0.0
 * 
 * @apiUse User
 * 
 * @apiSuccess {Object} Respuesta Objecto JSON
 * @apiSuccess {Boolean} Respuesta.success True si el registro es exitoso
 */
users.post("/signin", signin);

export default users;
