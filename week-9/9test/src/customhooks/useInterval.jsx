import { useEffect } from "react";


export function useInterval(fn,timer){

  useEffect(()=>{
    const id  =setInterval( 
        fn()
    ,timer)

   return ()=>   clearInterval(id);
   
  }
  
    ,[])

}