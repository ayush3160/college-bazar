import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String },
  cart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }],
});

const User = mongoose.model('User', userSchema);

export default User;
