const needfulProfileSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: String,
    needs: String,
    location: String,
    requests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'HelpRequest' }]
  }, { timestamps: true });
module.exports = mongoose.model('NeedfulProfile', needfulProfileSchema);