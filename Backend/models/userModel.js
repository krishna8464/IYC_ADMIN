
const DataTypes = require("sequelize");
const { sequelize } = require("../config/db");

const Users=sequelize.define("tbl_kl_online_data",{
    ID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      ORGANIZATION_CODE: {
        type: DataTypes.CHAR,
      },
      MEMBER_ID: {
        type: DataTypes.STRING,
      },
      FIRST_NAME: {
        type: DataTypes.STRING,
      },
      LAST_NAME: {
        type: DataTypes.STRING,
      },
      MOBILE1: {
        type: DataTypes.BIGINT,
      },
      EMAIL: {
        type: DataTypes.STRING,
      },
      ADDRESS: {
        type: DataTypes.TEXT,
      },
      CITY: {
        type: DataTypes.STRING,
      },
      SEX_CODE: {
        type: DataTypes.CHAR,
      },
      CATEGORY_CODE: {
        type: DataTypes.CHAR,
      },
      DATE_OF_BIRTH: {
        type: DataTypes.STRING,
      },
      RELATION_CODE: {
        type: DataTypes.CHAR,
      },
      RELATIVE_NAME: {
        type: DataTypes.STRING,
      },
      STATE_CODE: {
        type: DataTypes.STRING,
      },
      DISTRICT_CODE: {
        type: DataTypes.STRING,
      },
      ASSEMBLY_CODE: {
        type: DataTypes.STRING,
      },
      BOOTH_CODE: {
        type: DataTypes.CHAR,
      },
      BLOCK_CODE: {
        type: DataTypes.CHAR,
      },
      ID_TYPE: {
        type: DataTypes.CHAR,
      },
      ID_VALUE: {
        type: DataTypes.STRING,
      },
      REFERRER_ID: {
        type: DataTypes.STRING,
      },
      DECLARATION: {
        type: DataTypes.STRING,
      },
      VERIFICATION_CODE: {
        type: DataTypes.INTEGER,
      },
      DEVICE_ID: {
        type: DataTypes.STRING,
      },
      TMP_ID: {
        type: DataTypes.STRING,
      },
      CHANNEL: {
        type: DataTypes.STRING,
      },
      BATCH_NO: {
        type: DataTypes.STRING,
      },
      AGGR_ID: {
        type: DataTypes.STRING,
      },
      CREATED_ON: {
        type: DataTypes.STRING,
      },
      CREATED_BY: {
        type: DataTypes.STRING,
      },
      PINCODE: {
        type: DataTypes.STRING,
      },
      MANDALAM_CODE: {
        type: DataTypes.STRING,
      },
      PROFESSION: {
        type: DataTypes.STRING,
      },
      SCRUTINY_STATUS: {
        type: DataTypes.SMALLINT,
      },
      SCRUTINY_CODE: {
        type: DataTypes.STRING,
      },
      REASON: {
        type: DataTypes.STRING,
      },
      MODIFIED_ON: {
        type: DataTypes.DATE,
      },
      VSN: {
        type: DataTypes.INTEGER,
      },
      VOTING_STATUS: {
        type: DataTypes.TINYINT,
      },
      EXPIRY_DATE: {
        type: DataTypes.STRING,
      },
      CSN_SP: {
        type: DataTypes.INTEGER,
      },
      CSN_DP: {
        type: DataTypes.INTEGER,
      },
      CSN_AP: {
        type: DataTypes.INTEGER,
      },
      CSN_SG: {
        type: DataTypes.INTEGER,
      },
      CSN_BL: {
        type: DataTypes.INTEGER,
      },
      CSN_BT: {
        type: DataTypes.INTEGER,
      },
      EDUCATION: {
        type: DataTypes.STRING,
      }, 
},{
    timestamps : false
});



sequelize.sync()
.then(() => {
    console.log("User table Synced successfully")
})
.catch((e) => {
    // console.log(e)
    console.log("failed to sync User table")
})

module.exports={Users}