import User from '../models/usermodel.js';
import jwt from 'jsonwebtoken';

export const protect = async (req, res, next) => {
    try{
        let token = req.headers.authorization;

        if(token && token.startsWith("Bearer")){
            token = token.split("")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id).select('-password');
            next();
        }
        else{
            return res.status(401).json({
                message : "Not authorized, no token Found" 
            })
        }
    }
    catch(error){
        res.status(401).josn({
            message: "Token Failed",
            error: "error.message"
        })
    }
}