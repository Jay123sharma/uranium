const mongoose=require('mongoose');
// const { required } = require('nodemon/lib/config');

const bookschema=new mongoose.Schema({
bookname:{
    type: String,
    required: true,
 },
authorname: String, 
category: 
{
    type:String,
    enum:["science","maths","english","hindi"]
},
year: Number,
date: {
    type:Date,
    default:Date.now,
},
ispublished:Boolean,

},{timestamps:true})

module.exports=mongoose.model('user',bookschema)