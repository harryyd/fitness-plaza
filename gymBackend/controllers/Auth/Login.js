var jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt") ; 
const User = require("../../models/user")


exports.login =async(req,res) =>{

    try{
        const{email,password} = req.body ; 
        if(!email || !password) {
            return res.status(400).json({
                message: "fill the details ",
            })
        }

        let data =await User.findOne({email});

        if(!data){
            return res.status(401).json({
                message:"user not found "
            })
        }
        const payload = {
            email:data.email ,
            id :data._id,
            role :data.role 
        }

        if(await bcrypt.compare(password , data.password)){
           
            let token = jwt.sign(payload , "valhalla" ,{expiresIn :"1h"})
            console.log(token);

            data = data.toObject();
            data.token = token ;
            data.password = undefined ; 

            return res.cookie("token" , token ,{ httpOnly: true } ).json({
                message: "cookie create success" ,
                data ,
                token
            })

       
        }
        else {
            res.status(403).json({
                message: "user not verified",
            })

        }
    }
    catch(error) {
        res.status(400).json({
            message : "invalid login" 

        })
    }
}