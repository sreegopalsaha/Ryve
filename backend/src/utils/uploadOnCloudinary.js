import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";

const uploadOnCloudinay = async (localFilePath) => {
    try {
        if(!path) return null;

        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET
        });

        const uploadResult = await cloudinary.uploader.upload(localFilePath,
            {
                resource_type: "auto"
            });
        
        fs.unlinkSync(localFilePath)

        console.log(uploadResult);
        return uploadResult.url;

    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null;
    }
}