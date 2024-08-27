const Test = require("../models/test")

exports.test = async(req,res) =>{
    try{

        const {data} = req.body
        console.log(data)

        const udata = await Test.create({data}) ; 

        res.status(200).json({
            message : "testing success" ,
            data : udata
        })
    }catch(error){
        res.status(400).json({
            message : "testing failed",
            data :error
        }) 
    }
}