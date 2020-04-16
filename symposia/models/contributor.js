const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contributorSchema = new Schema(
  {
    name: { type: String },
    email: { type: String },
    avatar: { type: String },
    googleId: { type: String },
    symposia: {type: Schema.Types.ObjectId, ref: 'Symposium'}
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Contributor', contributorSchema);
