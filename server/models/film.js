const mongoose = require('mongoose');

const filmSchema = new mongoose.Schema ({
    _id:{type:Number, required:true},
    name:{type:String,required:true},
    boxOfficeCollection:{type: Number,required:true},
    rating:{type: Number,required:true},
    director:{type:String, required:true}
})

const Film = new mongoose.model('Film', filmSchema);
module.exports = Film;