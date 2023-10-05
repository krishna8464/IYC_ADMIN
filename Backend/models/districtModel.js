
const DataTypes = require("sequelize");
const { sequelize } = require("../config/db");

const District =sequelize.define("tbl_district_iyc",{
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      MASTER_STATE_CODE: {
        type: DataTypes.STRING, // Adjust the length as needed
        allowNull: false,
      },
      DISTRICT_CODE: {
        type: DataTypes.STRING, // Adjust the length as needed
        allowNull: false,
      },
      DISTRICT_NAME: {
        type: DataTypes.STRING, // Adjust the length as needed
        allowNull: false,
      },
      IS_ENABLED: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
},{
    timestamps : false,
    freezeTableName: true,
});



sequelize.sync()
.then(() => {
    console.log("District table Synced successfully")
})
.catch((e) => {
    console.log(e)
    console.log("failed to sync District table")
})

module.exports={District}