const AuthRepository = require('../reposotories/authRepository');
const { QueryTypes } = require('sequelize');
var jwt = require('jsonwebtoken');
const CryptoJS = require("crypto-js");
require('dotenv').config()

module.exports = class AuthService {
    constructor(){
        this.repository = new AuthRepository();
    }

    async login(req){

        try{
           
           let result = await this.repository.login(req.body.email,req.body.password);
           if(result && result.length==0){
                return {
                    success:false,
                    data:"User not found"
                };
           }
           let bytes  = CryptoJS.AES.decrypt(result[0].password, process.env.USER_PASSWORD_KEY);
           let originalText = bytes.toString(CryptoJS.enc.Utf8);
           
           if(originalText === req.body.password){
                let token = jwt.sign(result[0], process.env.USER_AUTHENTICATION_KEY);
                result[0].token = token;
                return {
                    success:true,
                    data:result
                };    
           }else{
                return {
                    success:false,
                    data:"Authorization is not successfull"
                };
           }
           
        }catch(err){
            
            return {
                success:false,
                data:"Authorization is not successfull"
            };

        }
    }
};