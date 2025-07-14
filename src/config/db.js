import mongoose from "mongoose";

const connectDB = ()=>{
    try {
        const connect = mongoose.connect(process.env.MONGOODB)
        console.log('MonmgooDB Connected');
        
    } catch (error) {
        console.log(error.message);
        
    }
}
export default connectDB;