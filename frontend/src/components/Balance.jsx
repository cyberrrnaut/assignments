
import { useState, useEffect } from 'react';
import axios from "axios";

export const Balance =  ({amount})=>{

    const [balance,setBalance] = useState(0)

    useEffect(() => {
        return async ()=>{
    const response= await axios.get("http://localhost:5000/api/v1/account/balance",{
       headers:{
        Authorization:`Bearer ${localStorage.getItem("token")}`
       }
    })
    setBalance(response.data.balance);
        }
       
    }, [balance]);

    return <div className="pl-2">
    
   

    <span className="font-bold">Your Balance   </span>
    <span className="font-bold pl-2">  Rs {balance} </span>
  

    </div>
}