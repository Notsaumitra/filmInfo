const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const api= require('./routes/api')
const PORT = process.env.PORT || 3000;



const app = express();
app.use(bodyParser.json());
app.use(cors());



app.use('/api',api)

app.get('/',(req,res)=>{
    res.send('Film test')
})

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})