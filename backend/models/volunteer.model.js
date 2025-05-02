import mongoose from "mongoose";

const volunteerSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: String,
  skills: [String],
  availability: String,
  location: String,
  matchedRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Help' }]
}, { timestamps: true });

const volunteerModel = mongoose.model("volunteer", volunteerSchema);

export default volunteerModel;