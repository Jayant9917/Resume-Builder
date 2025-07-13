
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
},
    {
        timestamps: true
    }
)

// Check if model already exists before creating it
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;