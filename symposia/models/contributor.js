const mongoose = require('mongoose');

const contributorSchema = new mongoose.Schema(
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

module.exports = mongoose.model('Contributor ', contributorSchema);
