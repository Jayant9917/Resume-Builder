import fs from 'fs';
import path from 'path';

import Resume from '../models/resumeModel.js';
import upload from '../middleware/uploadMiddleware.js';
import { error } from 'console';

export const uploadResumeImages = async (req, res) => {
    try{
        // Configure the multer to handling images 
        upload.fields([{name: 'thumbnail'}, {name : "profileImage"}])
        (req, res, async (err) => {
            if(err){
                return res.status(400).json({message: "file upload  failed", error: error.message})
            }
    })
}
    catch(error){

    }
}