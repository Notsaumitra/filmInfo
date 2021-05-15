const express = require('express');
const router = express.Router();

const Film = require('../models/film');
const Director = require('../models/director');

const mongoose = require('mongoose');


mongoose.connect(`mongodb+srv://testUser:test1234@mycluster.rau8g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connection successful');
}).catch(err => {
    console.log(err);
    console.log('failed');
})

router.get('/films',(req,res)=>{
    Film.find((err,data)=>{
        if(!err) {res.send(data);}
    });
})


router.post('/films',async(req,res)=>{
    try{
        let film1 = new Film(req.body);
        const createFilm= await film1.save();
        res.send(createFilm);
        }
        catch(err){
            res.status(400).send(err);
        }
})


router.get('/directors',(req,res)=>{
    Director.find((err,data)=>{
        if(!err) {res.send(data);}
    });
})

router.get('/directors/:_id',async(req,res)=>{
        const director = await Director.findOne({_id:req.params._id});
        res.send(director);
})

router.post('/directors',async(req,res)=>{
    try{
        let director1 = new Director(req.body);
        const createDirector= await director1.save();
        res.send(createDirector);
        }
        catch(err){
            res.status(400).send(err);
        }
})

router.delete('/films/:name',async(req, res) => {
    try{
        res.send({message:"success"});
        const { name } = req.params;
        console.log(name);
        const delFilm = await Film.findOneAndDelete({name});
        console.log(delFilm._id);
    }catch(err){
        res.send(err);
    }
})

router.put('/directors/:name',async(req,res)=>{
    try{
        const { name } = req.params;
        const dir = await Director.updateOne({name},req.body);
    }
    catch(err){
        res.send(err);
    }
})

module.exports=router;