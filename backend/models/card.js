const mongoose = require('mongoose');

const Schema = mongoose.Schema;
 
const CardSchema = new Schema({     
    name : {
        type : String,
        required : true
    },
    parentCard :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'card'
    },
    date : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    role:{
        type : String,
        required : true
    },
    languages : {
        type : [String],
        required : true
    }
    
});

const Card = mongoose.model("card",CardSchema) 
module.exports = Card