import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}- ${file.originalname}`)
    },
})

// File FILTER

const fileFilter = (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    if(allowedTypes.includes(file.mimetype)){
        cb(null, true)
    }
    else{
        cb(new Error("only jpeg, png, jpg files are allowed"), false)
    }
}

const upload = multer({storage, fileFilter})

export default upload;