import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

   // Configuration
    cloudinary.config({ 
        cloud_name: 'dtbq4kyti', 
        api_key: '114815767944547', 
        api_secret: 'JypzPiVzLYzddN2SixZ5-q8ji7E' // Click 'View API Keys' above to copy your API secret
    });


const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'batch-12',
      allowed_type: ['jpg','png'],
    //   format: 'jpeg'
    },
  });


export {cloudinary,storage
}