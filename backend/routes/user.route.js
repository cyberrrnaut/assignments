//routes
const express = require('express');
const router = express.Router();
// db
const {User} = require("../database/user.db.js");
const {Account} = require('../database/account.db.js');
//zod
const z =require("zod");
const zodSchema= z.object({
    username:z.string().email(),
    firstName:z.string(),
    lastName:z.string(),
    password:z.string(),
});
//------
const updatedZodSchema = z.object({
    password: z.string().optional(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),

});
//env
const path = require("path");
const dotenv = require("dotenv");
const envPath = path.resolve(__dirname, "../../../../.env");
dotenv.config({ path: envPath });
//jwt
const jwtKey = process.env.JWT_KEY ;
const jwt = require("jsonwebtoken");
//middleware
const {authMiddleware} = require("../middleware/auth.middleware.js")
//salt & hashing
const bcrypt = require("bcrypt");


router.post("/signup",async(req,res)=>{
    const body= req.body;
    
    const {success} = zodSchema.safeParse(body);

    if(!success) {
       return res.json({message:"invalid email/invalid inputs"});
    }

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ username: body.username });

        if (existingUser) {
            return res.status(409).json({ message: "Email already taken" });
        }
    
    const hashedPassword = await bcrypt.hash(body.password, 10);

    // Create new user in the database
    const dbUser = await User.create({
        username: body.username,
        firstName: body.firstName,
        lastName: body.lastName,
        password: hashedPassword,
    });
    
    const userId = dbUser._id;
    // create a new bank acc with random amount from 1 to 10000

      await Account.create({
        userId:userId,
        balance: 1+ Math.random()*10000, 
      })
    
    const token = jwt.sign({
        userId:dbUser._id,
    },jwtKey);

    return res.status(201).json({
        message:`User ${dbUser._id} created successfully`,
        token: token,
    });

    }catch(err){
        res.json({message:"Account not created"});
    }
    
    
});

//
router.post("/signin", async (req, res) => {
    const body = req.body;

    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.status(404).json({ message: "No user found, please sign up" });
        }

        const passwordMatch = await bcrypt.compare(body.password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: "Wrong credentials" });
        }

        const token = jwt.sign({ userId: user._id }, jwtKey);
        return res.status(200).json({ message: "Sign in successful", token: token });
    } catch (err) {
        console.error('Error during sign-in:', err);
        return res.status(500).json({ message: "Server internal error" });
    }
});

//
router.get("/bulk",authMiddleware,async(req,res)=>{
    const filter = req.query.filter || "";
    
    const users = await User.find({
        $or:[{
            firstName:{
                "$regex": filter,
            }
        },{
            lastName:{
                "$regex": filter,
            }
        }]
    })

    res.json({
        user: users.map( user=>({
           username: user.username,
           firstName:user.firstName,
           lastName: user.lastName,
           _id: user._id,
        }))
    })
})




module.exports =router;