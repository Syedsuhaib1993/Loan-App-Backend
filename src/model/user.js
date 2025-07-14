import { model, Schema } from "mongoose";



const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    image:String,
    otp:String,
    isactive:{
        type:Boolean,
        default:false
    }
})
const User = model('User', userSchema);
export default User;