const express = require("express");
const router = express.Router()
const {
    createCamera,
    getAllCameras,
    getIndividualCamera,
    editCamera,
    deleteCamera
}= require("../controller/cameraController")

router.route("/create_camera").post(createCamera)
router.route("/get_all_cameras").get(getAllCameras)
router.route("/get_camera").get(getIndividualCamera)
router.route("/edit_camera").put(editCamera)
router.route("/delete_camera").delete(deleteCamera)

module.exports = router