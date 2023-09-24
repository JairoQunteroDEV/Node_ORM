import express from "express";

const app = express()

app.use("/",(req,res)=>{
    res.send("hola mundo")
})

export default app;