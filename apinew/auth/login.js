const userservice = require('../../services/userService');
const Authservice = require('../../services/Authservice');

module.exports = async (req, res) => {

   try{
   
        if(!req.body.email){
            return res.status(400).send("Email Id is not recieved");
        }

        if(!req.body.password){
            return res.status(500).send("Password is not recieved");
        }

        let payload = await new Authservice(req).login(req);
        res.status(200).send(payload);
     
    }catch(error){
       
        if ([400, 403, 404].includes(error.code)) {
            return res.status(error.code).send(error.message);
        }
  
        console.error(error);
        return res.status(500).send(error.message);
   }

}