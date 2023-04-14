const mongoose =  require("mongoose")

const cameraNetworkSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    camera:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Camera"
    }]
})

module.exports = mongoose.model("CameraNetwork",cameraNetworkSchema)