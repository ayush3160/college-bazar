import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

async function uploadImage(imagePath: string): Promise<UploadApiResponse> {
    try {
        const result = await cloudinary.uploader.upload(imagePath, {
            folder: 'images/',
            resource_type: 'image'
        });
        return result;
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
    }
}

async function getImageDetails(publicId: string) {
    try {
        const result = await cloudinary.api.resource(publicId);
        return result;
    } catch (error) {
        console.error('Error fetching image details:', error);
        throw error;
    }
}

async function deleteImage(publicId: string) {
    try {
        const result = await cloudinary.uploader.destroy(publicId);
        return result;
    } catch (error) {
        console.error('Error deleting image:', error);
        throw error;
    }
}

