

import express from 'express';
import {  deleteLoan, getloandata, loandata, updateLoan } from '../controller/form.controller.js';


const LoanRoutes = express.Router()

LoanRoutes.post('/form',loandata)
LoanRoutes.get('/form',getloandata)
LoanRoutes.delete("/:id", deleteLoan);
LoanRoutes.patch("/:id", updateLoan);



export default LoanRoutes;