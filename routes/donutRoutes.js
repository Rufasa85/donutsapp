const express = require("express");
const router = express.Router();
const fs = require("fs");

const donuts = require("../db/donuts.json")

router.get("/",(req,res)=>{
    res.json(donuts)
})

router.get("/:id",(req,res)=>{
    for (let i = 0; i < donuts.length; i++) {
        if(donuts[i].id==req.params.id){
           return res.json(donuts[i])
        }   
    }
    res.status(404).send("no donut found")
})

router.post("/",(req,res)=>{
    console.log(req.body);
    donuts.push(req.body)
    fs.writeFileSync("./db/donuts.json",JSON.stringify(donuts,null,4))
    console.log("done")
    res.json({message:"data recieved"})
     
})

module.exports = router;