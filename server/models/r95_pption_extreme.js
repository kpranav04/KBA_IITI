
const express = require("express");
const mongoose = require("mongoose");
const R95_Schema = mongoose.Schema({
    data:{
        // type:String,
        // type:mongoose.Schema.Types.ObjectId,
        // ref:'Ticket'
        location:String,
        index:Number,
        value:Number,
        latitude:String,
        longitude:String
    },
    date: {
       type:String,
      }  
});
module.exports=mongoose.model('r95', R95_Schema );