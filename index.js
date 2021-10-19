const express = require("express");
const app = express();
const PORT = process.env.PORT ||3000;
const htmlRoutes = require("./routes/htmlRoutes");
const donutRoutes = require("./routes/donutRoutes");
const logReq = require("./middleware/logRequest")

app.use(logReq)
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.use(htmlRoutes)
app.use("/api/donuts",donutRoutes)

app.listen( PORT,()=>{
    console.log("listenin to port "+ PORT)
})