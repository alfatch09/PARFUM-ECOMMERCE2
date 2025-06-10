import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ['user', 'owner'],
      default: 'user',
    },
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    // Cari user lain dengan email sama tapi role berbeda
    const existingUser = await mongoose.models.User.findOne({
      email: this.email,
      role: { $ne: this.role },
    });

    if (existingUser) {
      const isSamePassword = await bcrypt.compare(this.password, existingUser.password);
      if (isSamePassword) {
        return next(new Error('Password untuk role berbeda tidak boleh sama.'));
      }
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);
export default User;
