import { model, Schema } from "mongoose";


const formSchema = new Schema({
    name:String,
    email:String,
    phone:String,
    amount:Number,
    type:String,
    status:{
        type:String,
        default:'Pending'
    }
})

const Loan = model('loans',formSchema)
export default Loan;

// name,email,phone,loanAmount,selectedLoanType