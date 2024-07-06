const express = require("express") ; 
const app = express() ;
const cors = require('cors');


app.use(express.json());
app.use(cors());

app.get("/" , (req,res)=>{
    res.json({
        hi : "hello"
    }) ;
})

app.post("/api/gym" , (req,res)=>{
    // const {firstname ,lastname, email, date } = req.body
    const {data} = req.body 
    console.log(data)
    res.status(200).json({
        status : "all ok"
    })
})

const port = 5000 ;  
app.listen(port, ()=>{
    console.log(`server running at port ${port} `)
})