const express = require("express");
const Districtroute = express.Router();
const { Users } = require("../models/userModel");
const { logger } = require("../middleware/logger");
// const { State } = require("../models/stateModel");
const { District } = require("../models/districtModel")



Districtroute.get("/database", async (req, res) => {
    res.send("Working");
});

Districtroute.get("/get", async(req,res)=>{
    try {
        const states = await District.findAll();
        res.status(200).send(states)
    } catch (error) {
        console.log(error)

        res.status(500).json({message : error});
    }
})

module.exports={Districtroute}