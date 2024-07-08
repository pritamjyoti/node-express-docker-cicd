const express= require('express');
require('dotenv').config();
const port =8000
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get('/',(req,res)=>{
    const response= {
        status:200,
        data:"success"
    }
    res.send(response)
})

app.all('/test',(req,res)=>{
    const response= {
        status:200,
        msg:"success1",
        data:req.body
    }
    res.send(response)
})
app.listen(port,()=>{
    console.log(` server run on port ${port}`)
    console.log(`Mysql server run on ${process.env.DB_HOST}`)
})

