import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './src/config/db.js'
import AuthRoutes from './src/routes/auth.routes.js'
import LoanRoutes from './src/routes/form.routes.js'
import ImageRoute from './src/routes/image.routes.js'


const app = express()
const port = 8080

const allowedOrigins = [
  "http://localhost:5173",
  "https://loan-app-green.vercel.app",
];

const corsOptions = {
  origin: allowedOrigins, // your frontend domain!
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
};
app.use(express.json())
app.use(cors(corsOptions))

dotenv.config()
connectDB()



// IMAGE UPLOAD
// const upload = multer({storage})
// app.post('/upload',upload.single('image'),(req,res)=>{
//     try {
//         return res.status(200).json({message:'Image uploaded successfully',
//             data:req.file.path})
//     } catch (error) {
//         return res.status(500).json({message:error.message})
//     }
// })

// AUTHROUTES
app.use('/api',AuthRoutes)

// LOANFORM
app.use('/api',LoanRoutes)

// IMAGEROUTES
app.use('/api',ImageRoute)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)})