const Camera = require("../models/cameraModel")
const cameraNetwork = require("../models/cameraNetworkModel")

//Adding new camera
exports.createCamera = async(req,res)=>{
    try{
        await Camera.create({
            name:req.body.name,
            description:req.body.description,
            url:req.body.url
        })
        res.status(201).json({
            message:"Camera Details created successfully"
        })
    }catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

//List of all cameras
exports.getAllCameras = async(req,res)=>{
    try{
       const camera = await Camera.find({})
       res.status(200).json({
        camera_list:camera
       })
    }catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

//Get single camera
exports.getIndividualCamera = async(req,res)=>{
    try{
      const camera = await Camera.findById({_id:req.query._id})
      res.status(200).json({
        camera_detail:camera
      })
    }catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

//edit camera details
exports.editCamera = async(req,res)=>{
    try{
    const camera = await Camera.findById({_id:req.query._id})
    if(camera){
        await Camera.findByIdAndUpdate({_id:req.query._id},{name:req.query.name,
        description:req.query.description,
        url:req.query.url})
            res.status(200).json({message:"Camera details updated successfully"})
    }
    else{
        res.status(404).json({
            message:"Camera with given _id doesn't exists"
        })
    }
    }catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

//delete camera form list
exports.deleteCamera = async(req,res)=>{
    try{
        const deleteCamera = await Camera.findById({_id:req.query._id})
        if(deleteCamera){
            await Camera.findByIdAndDelete({_id:req.query._id})
            await cameraNetwork.findOneAndUpdate({camera:req.query._id},{$pull:{camera:req.query._id}})
            res.status(200).json({
              message: "camera deleted successfully"
            })
        }
    else{
        res.status(404).json({
            message:"Camera with given _id doesn't exists"
        })
    }
    }catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}