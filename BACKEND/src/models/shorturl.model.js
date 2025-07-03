import mongoose from 'mongoose';

const shorturlSchema = new mongoose.Schema({

    full_url: {
        type: String,
        required: true
    },
    short_url: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    clicks: {
        type: Number,
        default: 0,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }

})

const ShortUrl = mongoose.model('shorturl', shorturlSchema);

export default ShortUrl;


