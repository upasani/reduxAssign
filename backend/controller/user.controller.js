const express=require('express');
const app=express();
const router=express.Router();
app.use(express.json());

router.post("/login",(req,res)=>{
    console.log(req.body);
    res.send({token:"Welcome to login"})
})
router.post("/register",(req,res)=>{
    console.log("In the register router");
    res.send('Welcome to register');
})


module.exports=router;
