const express=require('express');
const app=express();
const cors=require('cors');
const user=require('./controller/user.controller');
app.use(express.json());
app.use(cors());

app.use('',user);
app.use('',user);


app.get('/',(req,res)=>{
    return res.send("in the backend side");
})
app.listen(8080,()=>{
    console.log("Listening on the port 8080")
})

