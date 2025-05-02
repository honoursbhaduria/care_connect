import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    email:{
        type: String,
        unique : true,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['user', 'volunteer', 'NGO'],
        required: true,
        default: 'user'
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
