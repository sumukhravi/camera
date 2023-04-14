const cameraNetwork = require("../models/cameraNetworkModel")
const Camera = require("../models/cameraModel")

//create a new network
exports.createCameraNetwork = async(req,res)=>{
    try{
     await cameraNetwork.create({
        name:req.body.name,
        description:req.body.description,
        camera:req.body.camera
     })
     res.status(201).json({
        message:"Camera network created successfully"
     })
    }
    catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

//list of all network
exports.getAllCameraNetworks = async(req,res)=>{
    try{
      const CameraNetwork = await cameraNetwork.find({})
      res.status(200).json({cameraNetwork_list:CameraNetwork})
    }catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

//individual network details
exports.getIndividualCameraNetwork = async(req,res)=>{
    try{
    const CameraNetwork = await cameraNetwork.find({_id:req.query._id})
    res.status(200).json({cameraNetwork:CameraNetwork})
    }catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

//details of camera in a network
exports.getCameraDetails = async(req,res)=>{
    try{
   const [CameraNetwork]= await  cameraNetwork.find({_id:req.query._id}).select(["camera","-_id"])
   cameraDetails=[]
    for(i=0;i<CameraNetwork.length;i++) {
       cameraDetails.push( await Camera.findById({_id:CameraNetwork[i]}))
    }
    res.status(200).json({
        cameraDetails:cameraDetails
    })
    }catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

//add new camera to the network
exports.addToCameraNetowrk = async(req,res)=>{
    try{
     await cameraNetwork.findByIdAndUpdate({_id:req.query._id},{
        $push:{camera:req.query.camera}
     })
     res.status(200).json({message:"Camera added to network"})
    }catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}
//remove existing camera form network
exports.deleteFromCameraNetwork= async(req,res)=>{
    try{
        await cameraNetwork.findByIdAndUpdate({_id:req.query._id},{
           $pull:{camera:req.query.camera}
        })
        res.status(200).json({message:"Camera deleted from"})
       }catch(error){
           res.status(500).json({
               message:error.message
           })
       }
}

//edit network details
exports.editCameranetwork= async(req,res)=>{
    try{
        await cameraNetwork.findByIdAndUpdate({_id:req.query._id},{
            name:req.query.name,
            description:req.query.description
         })
    }catch(error){
           res.status(500).json({
               message:error.message
           })
       }
}

//delete the network
exports.deleteCameraNetwork = async(req,res)=>{
    try{
    await cameraNetwork.findByIdAndDelete({_id:req.query._id})
    res.status(200).json({
        message:"camera network deleted successfully"
    })
    }catch(error){
        res.status(500).json({
            message:error.message
        })
    }
}

