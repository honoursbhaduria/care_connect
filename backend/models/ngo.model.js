// models/NGOProfile.js
import mongoose from 'mongoose';

const ngoProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  organizationName: String,
  description: String,
  location: String,
  opportunities: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Opportunity' }]
}, { timestamps: true });

module.exports = mongoose.model('NGOProfile', ngoProfileSchema);