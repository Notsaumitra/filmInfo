const mongoose = require('mongoose');

const directorSchema = new mongoose.Schema ({
    name:{type:String,required:true},
    age:{type:Number, required:true},
    gender:{type:String,required:true},
    awards:{type:Number, required:true}
})

const Director = new mongoose.model('Director', directorSchema);
module.exports = Director;