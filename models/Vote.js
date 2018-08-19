const mongoose = require('mongoose');

const VoteSchema = new mongoose.Schema({
    token : {type : String},
    vote : {
        q : {type : String},
        a1 : {type : String},
        a2 : {type : String}
    },
        a1points : {type : Number, default : 0},
        a2points : {type : Number, default : 0}
});

const Vote = mongoose.model('Vote', VoteSchema);

module.exports = Vote;