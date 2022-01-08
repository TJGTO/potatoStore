const express = require('express');

const app = express();

const port = 8000;

const db = require('./models');

//middleware

app.use(express.json());

app.use(require('./apinew'));

db.sequelize.sync().then((res) =>{
    app.listen(port,()=> console.log(`Hello World We are listening to the port no ${port}`));
});


  


    


