const express = require('express');
const { authMiddleware } = require('../middleware/auth.middleware');
const { Account } = require('../database/account.db');
const { default: mongoose } = require('mongoose');

const router = express.Router();

router.get("/balance",authMiddleware,async(req,res)=>{
   const id = req.userId;

   const response = await Account.findOne({
    userId:id
   })
   
   console.log(response);
   
   res.status(200).json({
    balance: response.balance
   })

});

router.post("/transfer",authMiddleware,async(req,res)=>{
    const session =await mongoose.startSession();
    session.startTransaction();

    try{
     const {amount,to} = req.body;

    // Fetch sender's account within the transaction
     const sender = await Account.findOne({userId:req.userId}).session(session);
     
     if(!sender || sender.balance<amount){
        await session.abortTransaction();
        session.endSession();
        return res.status(400).json({message:"Insufficient balance or not authenticated"});
     }

    // Fetch recipient's account within the transaction
    const reciever = await Account.findOne({userId:to}).session(session);
    if(!reciever){
        session.abortTransaction();
        session.endSession();
        return res.status(400).json({message:"Invalid account"});
    } 

    //perform the transfer
    await Account.updateOne({
        userId:req.userId,
    },{
        $inc:{
            balance:-amount
        }
    }).session(session);
     
    await Account.updateOne({
        userId:to,
    },{
        $inc:{
            balance:amount
        }
    }).session(session);
    
    // commit the changes
    await session.commitTransaction();
    session.endSession();

    res.json({
        message:"Money transferred successfully"
    })

    }catch(err){
     
        await session.abortTransaction();
         session.endSession();

         console.log("Transaction error:"+err);
         res.status(500).json({
            message:"Internal Server error"
         })
    }

});

module.exports =router;