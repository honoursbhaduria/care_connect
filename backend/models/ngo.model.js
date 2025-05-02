import mongoose from "mongoose";

const ngoSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', required: true
  },
  name: String,
  skills: [String],
  availability: String,
  location: String,
  matchedRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Help' }]
}, { timestamps: true });

const ngoModel = mongoose.model("ngo", ngoSchema);

export default ngoModel;