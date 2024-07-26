import express from "express"
import path from "path"
const __dirname=import.meta.dirname;
const app=express();  

app.use(express.static("./static"));

app.all("*",(req,res)=>{
    res.writeHead("404","NOT FOUND",{
        "content-type" :"text/plain"
    }).end("poopy poo poo");
})



app.listen(3000,()=>{
    console.log("Server is listening")
})