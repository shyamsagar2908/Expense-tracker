const express = require('express');
const cors= require('cors');
const morgan=require('morgan');
const dotenv=require('dotenv');
const colors=require('colors');
const path= require('path');
const connectDb = require('./config/connectDb');

//config dot env file
dotenv.config();
//database call
connectDb();
//rest object
//express ke sare feature app ki madad se use kar sakte hai
const app=express();
//connect to the MongoDb database

// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


//routes
 
//user routes
app.use('/api/users' ,require('./routes/userRoute'));
//transections routes
app.use('/api/transections' ,require('./routes/transectionRoutes'));

//static files
app.use(express.static(path.join(__dirname,"./client/dist")));

app.get("*",function(req,res){
    res.sendFile(path.join(__dirname,'./client/dist/index.html'));
});

//port
const PORT = 8080 || process.env.PORT;
//listen server
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});
