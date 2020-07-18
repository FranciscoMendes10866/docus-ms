import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  linkName: {
    type: String,
    required: true,
  },
  linkURL: {
    type: String,
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

export default mongoose.model('Links', schema);
