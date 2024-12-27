import multer from 'multer';

const uploadMulter = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 10 * 1024 * 1024
    },
    dest: 'uploads/'
});

export default uploadMulter;