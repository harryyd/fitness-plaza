
const User = require("../../models/user")
const bcrypt = require("bcrypt") ;


exports.signup = async(req,res) =>{
    try{
        const{name,email,password ,role} = req.body ;

        const alreadyPresent = await User.findOne({email}) ;
        console.log(alreadyPresent) ; 

        if(alreadyPresent) {
            res.status(400).json({
                message : "already present"
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
             const createuser = await User.create({name,email,password:hashedPassowrd,role})
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
