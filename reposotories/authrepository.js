
const Users = require("../models").Users;
const db = require('../models');
const CryptoJS = require("crypto-js");
const { QueryTypes } = require('sequelize');

module.exports = class AuthRepository {

    async login(email,password){
      
        try{
            
            let query = `SELECT usr.*, uspm.imagePath FROM users usr 
            LEFT JOIN userprofilepicturemap uspm ON uspm.userId = usr.id
            WHERE usr.email = '${email}'`;
            
            const users = await db.sequelize.query(query, { type: QueryTypes.SELECT});

            return users;
 
        }catch(err){
            
            console.log(err);
            return "Error";

        }
        
    }
};