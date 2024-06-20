import React from 'react';

export const Avatar = ({ name, bgColor = 'bg-gray-200', textColor = 'text-gray-800' }) => {
  
  const firstLetter = name ? name.charAt(0).toUpperCase() : '';

  return (
    <div className={`flex items-center justify-center w-16 h-16 ${bgColor} rounded-full ${textColor} text-xl font-bold`}>
      {firstLetter}
    </div>
  );
};

export default Avatar;

