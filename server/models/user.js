
const express = require("express");
const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique:true  
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  password: {
    type: String,
    required: true,
  },
  contactNo:{
    type:Number,
    // required:true
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },

  });


module.exports=mongoose.model('User', UserSchema);