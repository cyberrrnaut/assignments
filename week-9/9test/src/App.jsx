import { useState } from 'react';
import { useInterval } from './customhooks/useInterval';
import { useIsOnline } from './customhooks/useIsOnline'
import { useMousePointer } from './customhooks/useMousePointer';


function App() {
   
  const online = useIsOnline();
  const pointer = useMousePointer();
  const [count,setCount]= useState(0);
  
  useInterval(()=>{
   setCount(c=>c+1)
  } ,1000)
  return (
    <>
    {online?"User online":"User offline"}
    <br></br>
    {`Your mouse is at ${pointer.y } ${pointer.x}`}
    <br></br>
    { `count: ${count}` }

    </>

  )
}

export default App


