
const DataTypes = require("sequelize");
const { sequelize } = require("../config/db");

const Assembly =sequelize.define("tbl_iyc_assembly",{
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      MASTER_STATE_CODE: {
        type: DataTypes.CHAR(255), // Adjust the length as needed
        allowNull: false,
      },
      DISTRICT_CODE: {
        type: DataTypes.CHAR(255), // Adjust the length as needed
        allowNull: false,
      },
      ASSEMBLY_CODE: { // Define the ASSEMBLY_CODE column
        type: DataTypes.CHAR(255),
        allowNull: false,
      },
      ASSEMBLY_NAME: {
        type: DataTypes.STRING(255), // Adjust the length as needed
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
    console.log("Assembly table Synced successfully")
})
.catch((e) => {
    console.log(e)
    console.log("failed to sync Assembly table")
})

module.exports={Assembly}