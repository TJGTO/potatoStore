
const Users = require("../models").Users;
const db = require('../models');
const CryptoJS = require("crypto-js");
var Sequelize = require("sequelize");
const { QueryTypes } = require('sequelize');

module.exports = class AuthRepository {

    async login(email,password){
      
        try{
            
            let query = `SELECT * FROM users WHERE email = '${email}'`;
            const users = await db.sequelize.query(query, { type: QueryTypes.SELECT});
            console.log(users);
            return users;
 
         }catch(err){
             
            console.log(err);
            return "Error";
 
         }
        
    }
};