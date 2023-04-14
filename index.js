const express = require("express");
const cors = require("cors")
const app = express();
const mongoose = require("mongoose")
const cameraRouter= require('./routes/cameraRoutes')
const cameraNetworkRouter = require("./routes/cameraNetworkRoutes")


app.use(express.json())
app.use(cors())
app.use("/api",cameraRouter)
app.use("/api",cameraNetworkRouter)
app.listen(3000 || 5000,()=>{
    console.log(`Running on PORT 3000`)
})
mongoose.connect("mongodb://localhost:27017").then(()=>{
    console.log("DB connected")
})
