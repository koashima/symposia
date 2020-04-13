const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    avatar: { type: String },
    googleId: { type: String },
  },
  {
    timpestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
