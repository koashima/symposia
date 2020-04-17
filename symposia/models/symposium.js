const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comment: String
});

const postSchema = new Schema({
    post: {
        type: String,
        required: true,
    },
    comment: [commentSchema]
});

const symposiumSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    post: [{type: Schema.Types.ObjectId, ref: 'Post'}]
});

module.exports = mongoose.model('Symposium', symposiumSchema)