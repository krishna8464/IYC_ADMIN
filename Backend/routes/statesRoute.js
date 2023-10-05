const express = require("express");
const Stateroute = express.Router();
// const { Users } = require("../models/userModel");
// const { logger } = require("../middleware/logger");
const { States } = require("../models/stateModel")


// Stateroute.get("/database", async (req, res) => {
//     res.send("Working");
// });

Stateroute.get("/get", async(req,res)=>{
    try {
        const state = await States.findAll({});
        res.status(200).send(state)
    } catch (error) {
        // console.log(error)

        res.status(500).json({message : error});
    }
})

module.exports={ Stateroute }