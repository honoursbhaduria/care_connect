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
        enum: ['user', 'volunteer'],
        required: true,
        default: 'user'
    }
}, { timestamps: true });

const userModel = mongoose.model("user", userSchema);

export default userModel;