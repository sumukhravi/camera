const mongoose = require("mongoose")

const cameraSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    url:{
        type:String,
    required:true   
     },
     description:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Camera",cameraSchema)