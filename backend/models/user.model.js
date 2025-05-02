import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
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
        enum: ['user', 'ngo'],
        required: true,
        default: 'user'
    }
}, { timestamps: true });

const userModel = mongoose.model("user", userSchema);

export default userModel;