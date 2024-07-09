const express = require("express") ;
const app = express() ;
const api = require("./routes/api")

app.use(express.json()) ; 

app.use("/api" , api) ; 

app.get("/" , (req,res)=>{
    res.json({
        message : "true"
    })
})



app.listen(3000 , (req,res)=>{
    console.log("listening") ; 
})