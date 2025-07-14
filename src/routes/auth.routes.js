import express from 'express';
import { Login, Signup, verifyemail } from '../controller/auth.controller.js';

const AuthRoutes = express.Router()


AuthRoutes.post('/signup',Signup)
AuthRoutes.post('/login',Login)
AuthRoutes.post('/verify',verifyemail)


export default AuthRoutes;