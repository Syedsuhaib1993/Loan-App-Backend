import express from 'express'
import multer from 'multer'
import { storage } from '../config/Cloudinary.js'
import { image } from '../controller/image.controller.js'



const upload = multer({storage:storage})


const ImageRoute = express.Router()


ImageRoute.post('/',upload.single("image"), image )

export default ImageRoute