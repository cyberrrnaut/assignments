import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
 

  return (
    <>
    <button onClick={function(){
      setCount(function(count){
        return count+1
      })
    }}> Hi {count}</button>
    </>
  )
}

export default App
