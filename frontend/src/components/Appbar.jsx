import Avatar from "./Avatar"


export const Appbar = ({name})=>{

    return <div className="flex justify-between">
    <span className="pl-2">
    PayTm
    </span>
  
    <div className="grid grid-cols-2">
    <span className="pt-8"> Hello</span>  
    <div className="pr-2 pt-2 ">
    <Avatar name={name}/>  
    </div>
   
    </div>
      

    </div>
}