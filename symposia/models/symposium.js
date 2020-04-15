const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comment: String
});

const postSchema = new Schema({
    post: {
        type: String,
        required: true, unique: true
    },
    comment: [commentSchema]
});

const symposiumSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    post: [postSchema]
});

module.exports = mongoose.model('Symposium', symposiumSchema)