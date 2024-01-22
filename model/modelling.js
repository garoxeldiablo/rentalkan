import { Sequelize } from "sequelize";
import dbase from "../config/db.js";

const {DataTypes} = Sequelize

const alatBerat = dbase.define('alatberat',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    produk : DataTypes.STRING,
    merk : DataTypes.STRING,
    sewa : DataTypes.STRING,
    minimum_sewa : DataTypes.STRING,
    harian_operator : DataTypes.STRING,
    image : DataTypes.STRING
},{ freezeTableName : true, 
    deletedAt: true
});

const userClient = dbase.define('userclient',{
    id_user : {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    nama_user: DataTypes.STRING,
    email : DataTypes.STRING,
    password : DataTypes.STRING,
    handphone : DataTypes.STRING
}, {
    freezeTableName:true,
    deletedAt:true
});

export {alatBerat, userClient};

(async()=>{
    await dbase.sync();
})();