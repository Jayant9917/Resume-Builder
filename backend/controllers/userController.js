import User from '../models/usermodel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

//GENERATE A TOKEN JWT 
const generateToken = (userId) => {
    return jwt.sign({ id: userId}, process.env.JWT_SECRET, {expiresIn: '7d'})
}


export const registerUser = async (req, res) => {
    try{
        const { name, email, password } = req.body;

        //CHECK IF THE USER ALREADY EXISTS

        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(400).json({message: "User already  exists"})
        }
        if(password.length < 8){
            return res.status(400).json({success: false,message: "Password must be at least 8 characters"})
        }

        // HASHING PASSWORD

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //CREATE A USER
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })
        res.status(201).json({
            _id: user._id,
            name: user.name,
            emial: user.email,
            token: generateToken(user._id)
        }

        )

    }
    catch(error){
        res.status(400).json({message: error.message});
    }
}