import React, { useEffect, useState } from "react";
import { LoadingSpinner } from "./LoadingSpinner"; 

const Popup = ({ message, onClose }) => {
  const [count, setCount] = useState(5); 

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count > 0) {
        setCount(count - 1); // Decrease count every second
      } else {
        onClose(); 
      }
    }, 1000); 

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, [count, onClose]);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-lg p-6">
        <p className="text-lg font-semibold mb-4">{message}</p>
        <p className="text-lg text-red-600 font-semibold mb-4">{`Navigating to dashboard in ${count} seconds`}</p>
        
             
        <LoadingSpinner size={16} /> 
       

      </div>
    </div>
  );
};

export default Popup;
