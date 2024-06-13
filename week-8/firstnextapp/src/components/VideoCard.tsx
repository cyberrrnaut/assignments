import React from 'react';

export const VideoCard: React.FC = (props:any) => {
  return (
    <div  className="max-w-sm rounded overflow-hidden shadow-lg cursor-pointer">


      <img src={props.thumbnail} alt="Main content" className="w-full" />
      
      <div className="grid grid-cols-12 bg-dark text-tahiti">

  
        <div className="col-span-2">
          <img  className='rounded-full w-25 h-25' src="image.png" alt="Thumbnail" />
        </div>

        <div className="col-span-10">
          <div className="text-lg font-semibold pl-2">  {props.title} </div>
          <div>{props.author}</div>
          <div className='flex'> 
          <div>{props.views}</div>  |
          <div>{props.timestamp}</div>

          </div>
         
        </div>
      </div>
    </div>
  );
};
