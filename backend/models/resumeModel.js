import mongoose from 'mongoose';

const resumeSchema = new mongoose.Schema({
    userId: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    thumbnailLink: {
        type: String
    },
    template: {
        theme: String,
        colorPalette: [String]
    },
    profileInfo: {
        profilePreviewUrl: String,
        fullName: String,
        designation: String,
        summary: String
    },
    contactInfo: {
        email: String,
        phone: String,
        location: String,
        linkedIn: String,
        github: String,
        website: String
    },
    // Work Experience Schema 
    workExperience: [
        {
            company: String,
            role: String,
            startDate: String,
            endDate: String,
            description: String
        },
    ],
    education: [
        {
            degree: String,
            institution: String,
            startDate: String,
            endDate: String
        },
    ],
    skills: [
        {
            name: String,
            progress: Number 
        },
    ],
    projects: [
        {
            title: String,
            description: String,
            githubLink: String,
            liveDemo: String
        },
    ],
    certifications: [
        {
            title: String,
            issuer: String,
            year: String,
        },
    ],

    languages: [
        {
            name : String, // was 'namae'
            progress: Number,
        },
    ],
    interests: [String], // was 'intrestes'
},
{
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt"}
}
)

// Check if model already exists before creating it
const Resume = mongoose.models.Resume || mongoose.model('Resume', resumeSchema);

export default Resume;