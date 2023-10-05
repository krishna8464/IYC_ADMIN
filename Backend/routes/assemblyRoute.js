const express = require("express");
const Assemblyroute = express.Router();
const { Users } = require("../models/userModel");
const { logger } = require("../middleware/logger");
// const { State } = require("../models/stateModel");
const { Assembly } = require("../models/assembly");



Assemblyroute.get("/database", async (req, res) => {
    res.send("Working");
});

Assemblyroute.get("/get", async(req,res)=>{
    try {
        const assembly = await Assembly.findAll();
        res.status(200).send(assembly)
    } catch (error) {
        console.log(error)

        res.status(500).json({message : error});
    }
})

module.exports={Assemblyroute}