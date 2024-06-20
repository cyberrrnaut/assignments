import {Link} from "react-router-dom"

export const BottomWarning = ({label,buttonText,to})=>{
  return <div>
    {label}
   <Link to={to}  className="pointer underline pl-1 cursor-pointer">
   {buttonText}
   </Link> 

  </div>
    
}