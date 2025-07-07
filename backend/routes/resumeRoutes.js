import express from 'express';
import { protect } from '../middleware/authMiddleware.js'; 
import { createResume, deleteResume, getResumeById, getUserResumes, updateResume } from '../controllers/resumeController.js';
import { uploadResumeImages } from '../controllers/uploadImages.js';


const resumeRoutes = express.Router();
resumeRoutes.post('/', protect, createResume);
resumeRoutes.get('/', protect, getUserResumes);
resumeRoutes.get('/:id', protect, getResumeById);

resumeRoutes.put('/:id', protect, updateResume);
resumeRoutes.put("/:id/uploads-images", protect, uploadResumeImages);

resumeRoutes.delete('/:id', protect, deleteResume);

export default resumeRoutes;