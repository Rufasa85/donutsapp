const express = require("express");
const path = require("path")
const app = express();

const PORT = 3000;

const donuts = [
    {
        id:1,
        name:"Boston Creme",
        price:3.99
    },
    {
        id:2,
        name:"apple fritter",
        price:5.99
    },
    {
        id:3,
        name:"Maple Bar",
        price:4.99
    },
    {
        id:4,
        name:"Glazed",
        price:4.99
    },
    {
        id:5,
        name:"Old Fashioned",
        price:3.99
    }

]

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
    res.json({message:"data recieved"})
})

app.listen( PORT,()=>{
    console.log("listenin to port "+ PORT)
})