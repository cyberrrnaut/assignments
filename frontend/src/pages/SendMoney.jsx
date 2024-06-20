
import {Avatar} from "../components/Avatar";
import {InputBox} from "../components/InputBox";
import {GreenButton} from "../components/GreenButton";


export const SendMoney = ()=>{


    return <div className="bg-slate-300 h-screen flex justify-center">

        <div className="flex flex-col justify-center">

         <div className="rounded-lg bg-white w-160 h-160 p-2 h-max px-4 shadow-xl">

         <div className="text-center pb-10 pt-3">
         <span className="font-bold text-3xl pl-4 pt-3">
    Send Money
    </span>

    </div >
   
 <div className="flex flex-col justify-center">
 <div className="flex pb-4">
    <Avatar name={"S"} textColor="text-white" bgColor="bg-green-500"/>
    <span className="font-bold text-3xl pl-4 pt-3">
    {"Name"}
    </span>
    </div>
   <div className="pb-2">
   <InputBox label={`Amount(in Rs)`} placeholder={"Enter amount"} type={"number"}/>

   </div>

    <GreenButton onClick={""} label={"Initiate Transfer"}/>
 </div>
  
  

         </div>

        </div>
   
    </div>
}