import mongoose from 'mongoose';

const needfulSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: String,
    needs: String,
    location: String,
    requests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Help' }]
  }, { timestamps: true });

const needfulModel = mongoose.model("needful", needfulSchema);

export default needfulModel;