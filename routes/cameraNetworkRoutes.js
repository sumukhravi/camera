const express = require("express");
const router = express.Router()
const {
    createCameraNetwork,
    getAllCameraNetworks,
    getIndividualCameraNetwork,
    getCameraDetails,
    addToCameraNetowrk,
    deleteFromCameraNetwork,
    editCameranetwork,
    deleteCameraNetwork 
}= require("../controller/cameranetworkController");
const cameraModel = require("../models/cameraModel");

router.route("/create_network").post(createCameraNetwork)
router.route("/network_list").get(getAllCameraNetworks)
router.route("/individual-network").get(getIndividualCameraNetwork)
router.route("/network_camera_details").get(getCameraDetails)
router.route("/add_camera_network").put(addToCameraNetowrk)
router.route("/remove_camera-network").put(deleteFromCameraNetwork)
router.route("/edit_network").put(editCameranetwork)
router.route("/delete_network").delete(deleteCameraNetwork)

module.exports=router