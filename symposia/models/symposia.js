const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const symposiumSchema = new Schema(
    {

    }
    
);

module.exports = mongoose.model('Symposium', symposiumSchema)