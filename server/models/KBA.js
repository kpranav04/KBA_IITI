const express = require("express");
const mongoose = require("mongoose");
const KBA = mongoose.Schema({
    location:{
        type:String
    },
    latitude:{
        type:String
    },
    longitude:{
        type:String
    }


    
});