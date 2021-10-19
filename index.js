const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

const PORT = 3000;

const donuts = require("./db/donuts.json")

app.use(express.static("public"))

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get("/",(req,res)=>{
   res.sendFile(path.join(__dirname,`public/homepage.html`))
})

app.get("/api/donuts",(req,res)=>{
    res.json(donuts)
})

app.get("/api/donuts/:id",(req,res)=>{
    for (let i = 0; i < donuts.length; i++) {
        if(donuts[i].id==req.params.id){
           return res.json(donuts[i])
        }   
    }
    res.status(404).send("no donut found")
})

app.post("/api/donuts",(req,res)=>{
    console.log(req.body);
    donuts.push(req.body)
    fs.writeFileSync("./db/donuts.json",JSON.stringify(donuts,null,4))
    console.log("done")
    res.json({message:"data recieved"})
     
})

app.listen( PORT,()=>{
    console.log("listenin to port "+ PORT)
})