const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser=require("cookie-parser");
const cors= require("cors");
const AuthRoute=require('./routes/auth');
const indexRoute=require('./routes/index');
const bodyParser = require('body-parser');








dotenv.config();
const app = express();
app.use(bodyParser.json());

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("Database connected!")
    } catch (error) {
        throw error
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected")
});


//MIDDLEWARES
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });


  app.use('/index',indexRoute); 
  app.use('/auth', AuthRoute);

app.get("/",(req,res)=>{
    res.send("Hello there")
})

app.listen(3000, () => {
    connect();
    console.log("Server is runnig on port 3000!")
})
