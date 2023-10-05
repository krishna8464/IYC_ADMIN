
const DataTypes = require("sequelize");
const { sequelize } = require("../config/db");

const States =sequelize.define("tbl_master_state_iyc",{
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      MASTER_STATE_CODE: {
        type: DataTypes.CHAR,
        allowNull: false,
      },
      STATE_NAME: {
        type: DataTypes.STRING,
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
    console.log("state table Synced successfully")
})
.catch((e) => {
    console.log(e)
    console.log("failed to sync statess table")
})

module.exports={States}