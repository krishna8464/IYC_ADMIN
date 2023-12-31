const express = require("express");
const Userroute = express.Router();
const { Users } = require("../models/userModel");
const { logger } = require("../middleware/logger");
const { Op } = require("sequelize");
// const { State } = require("../models/stateModel")


Userroute.get("/database", async (req, res) => {
    res.send("Working");
  });

Userroute.get("/get/:page" , async(req,res)=>{
    const pageNumber = req.params['page']; // Change this to the desired page number
    const pageSize = 100; // Change this to the desired page size

    // Calculate the offset based on the page number and page size
    const offset = (pageNumber - 1) * pageSize; 
    try {
        let { count, rows } = await Users.findAndCountAll({ limit : pageSize , offset: offset});
            res.status(200).json({ count, rows });
        
    } catch (error) {
        // console.log(error)
        res.status(500).json({message : "Something went wrong with the route"});
    }
});


Userroute.get("/get/filter/:state_code/:district_code/:assimbly_code/:page" , async(req,res)=>{
    const STATE_CODE = req.params["state_code"];
    const DISTRICT_CODE = req.params["district_code"];
    const ASSEMBLY_CODE = req.params["assimbly_code"];
    const page = req.params["page"]
    const limit = 100;
    try {
        const whereConditions = {};

        if (STATE_CODE != 0) {
          whereConditions.STATE_CODE = STATE_CODE;
        }
    
        if (DISTRICT_CODE != 0) {
          whereConditions.DISTRICT_CODE = DISTRICT_CODE;
        }
    
        if (ASSEMBLY_CODE != 0) {
          whereConditions.ASSEMBLY_CODE = ASSEMBLY_CODE;
        }
    
        // Use the whereConditions directly in the query
        const { count, rows } = await Users.findAndCountAll({
          where: whereConditions,
          offset: (page - 1) * limit,
          limit: limit,
        });
        res.status(200).json({ count, rows });
        
    } catch (error) {
        res.status(400).send(error);
    }
});


Userroute.get("/getrecordscount" , async (req,res) => {
    try {
        
        const totalCount = await Users.count();
        res.status(200).json({ totalCount });

    } catch (error) {
        res.status(400).send(error);
    }
})

module.exports = { Userroute }       