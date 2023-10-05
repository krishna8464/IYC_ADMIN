const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize("ycea-prod","iyc-internal","zA2aKuGI",{
    host : "ycea-iyc.cuc5uocado2t.ap-south-1.rds.amazonaws.com", 
    port : 3306,
    dialect : "mysql",
    // logging: false,
});


sequelize.authenticate()
.then((res)=>{
    console.log("Connection Successfull to db");
})
.catch((err) => {
    console.log("Failed to connect");
});


// Redis cloud settings

// const { createClient } = require("redis");

// const client = createClient({
//     password: process.env.PASS,
//     socket: {
//         host: process.env.REDISHOST,
//         port: 11307
//     }
// });

module.exports={
    sequelize,
    // client
}