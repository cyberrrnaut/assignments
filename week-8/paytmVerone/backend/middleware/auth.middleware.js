//Header - 
//Authorization: Bearer <actual token>


//env
const path = require("path");
const dotenv = require("dotenv");
const envPath = path.resolve(__dirname, "../../../../.env");
dotenv.config({ path: envPath });
//jwt
const jwtKey = process.env.JWT_KEY ;
const jwt = require("jsonwebtoken");

const authMiddleware= async(req,res,next)=>{
  const header= req.headers.authorization;
   
  if(!header || !header.startsWith('Bearer ')){
    
    return res.status(403).json({});
  }
  
  const token= header.split(' ')[1]; // 0->Bearer

   try{
     const decoded = await jwt.verify(token,jwtKey);

     req.userId =decoded.userId;

     next();
   }catch(err){
     return res.status(403).json({});
   }
}

module.exports = {
    authMiddleware
}


