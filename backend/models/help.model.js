import mongoose from "mongoose";

const helpSchema = new mongoose.Schema({
    title: String,
    description: String,
    requester: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    location: String,
    time: Date,
    status: { 
        type: String, 
        enum: ['pending', 'in-progress', 'completed'], 
        default: 'pending' 
    },
    // Optional: add field for volunteer who accepts the help request
    volunteer: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        default: null
    }
}, { timestamps: true }); 


const helpModel = mongoose.model("help", helpSchema);

export default helpModel;