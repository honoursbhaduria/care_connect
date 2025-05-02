import mongoose from "mongoose";

const volunteerProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: String,
  skills: [String],
  availability: String,
  location: String,
  matchedRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'HelpRequest' }]
}, { timestamps: true });

module.exports = mongoose.model('VolunteerProfile', volunteerProfileSchema)