const express=require('express');
const app=express();
const PORT=process.env.PORT || 3000;

app.use(express.json());

app.use("/",(req,res)=>{
res.send("Hey")
});

app.listen(3000,()=>{
    console.log("welcome i am on");
})