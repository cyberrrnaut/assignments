import { VideoCard } from "./VideoCard"

const VIDEOS = [
    {
    title:" Code with me" ,
    thumbnail: "image.png",
    author:"Cybernaut", 
    views:"46M views",
    timestamp:"13 days ago", 
},
{
    title:" ASMR with me" ,
    thumbnail: "image.png",
    author:"Junesmoon", 
    views:"46M views",
    timestamp:"13 days ago", 
},
{
    title:" Play with me" ,
    thumbnail: "image.png",
    author:"Cybernaut", 
    views:"46M views",
    timestamp:"13 days ago", 
},
{
    title:" Podcast with me" ,
    thumbnail: "image.png",
    author:"Cybernaut", 
    views:"46M views",
    timestamp:"13 days ago", 
},{
    title:" Code with me" ,
    thumbnail: "image.png",
    author:"Cybernaut", 
    views:"46M views",
    timestamp:"13 days ago", 
},{
    title:" Code with me" ,
    thumbnail: "image.png",
    author:"Cybernaut", 
    views:"46M views",
    timestamp:"13 days ago", 
},{
    title:" Code with me" ,
    thumbnail: "image.png",
    author:"Cybernaut", 
    views:"46M views",
    timestamp:"13 days ago", 
},{
    title:" Code with me" ,
    thumbnail: "image.png",
    author:"Cybernaut", 
    views:"46M views",
    timestamp:"13 days ago", 
},{
    title:" Code with me" ,
    thumbnail: "image.png",
    author:"Cybernaut", 
    views:"46M views",
    timestamp:"13 days ago", 
},{
    title:" Code with me" ,
    thumbnail: "image.png",
    author:"Cybernaut", 
    views:"46M views",
    timestamp:"13 days ago", 
},{
    title:" Code with me" ,
    thumbnail: "image.png",
    author:"Cybernaut", 
    views:"46M views",
    timestamp:"13 days ago", 
},{
    title:" Code with me" ,
    thumbnail: "image.png",
    author:"Cybernaut", 
    views:"46M views",
    timestamp:"13 days ago", 
},{
    title:" Code with me" ,
    thumbnail: "image.png",
    author:"Cybernaut", 
    views:"46M views",
    timestamp:"13 days ago", 
},{
    title:" Code with me" ,
    thumbnail: "image.png",
    author:"Cybernaut", 
    views:"46M views",
    timestamp:"13 days ago", 
},{
    title:" Code with me" ,
    thumbnail: "image.png",
    author:"Cybernaut", 
    views:"46M views",
    timestamp:"13 days ago", 
},
]


export const VideoGrid= ()=>{

return(<div className="grid grid-cols-1
 md:grid-cols-2 
 lg:grid-cols-4 gap-4">
  {VIDEOS.map((video)=> 
  <div>
    <VideoCard title={video.title} thumbnail={video.thumbnail} author={video.author} views={video.views} timestamp={video.timestamp} />

  </div>)}

</div>)

}