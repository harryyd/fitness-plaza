
const User = require("../../models/user")
const bcrypt = require("bcrypt") ;


exports.signup = async(req,res) =>{
    try{
        const{firstname ,lastname ,email,password ,role} = req.body ;

        const obj = {
            firstname ,lastname ,email,password ,role
        }

        if(!firstname ||!lastname || !email ||!password )
        {   
            // res.newmessage ="please fill all detail "
            return res.status(409).json({
                message : "fill all detail "
                // data : obj ,
            })
        }

        const alreadyPresent = await User.findOne({email}) ;
        console.log(alreadyPresent) ; 

        if(alreadyPresent) {
            return res.status(409).json({
                message : "already present" ,
                data : alreadyPresent 
            })
        }

            let hashedPassowrd ;
            try{
                hashedPassowrd =await bcrypt.hash(password, 10)
           } 
           catch(error){
               res.status(500).json({
                   message: "password not hashed"
               })
           }
             const createuser = await User.create({firstname,lastname,email,password:hashedPassowrd,role})
                console.log(createuser)
             
                res.status(200).json({
                message : "create success" ,
                data : createuser 
            })
        }  
    catch(error) {
        res.status(400).json({message: "error in signup"})
    }
}
