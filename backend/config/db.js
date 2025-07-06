import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://admin:jayant132465rana@cluster0.cty7ree.mongodb.net/Resume-Builder')
    .then(() => console.log('connected to db'))
}