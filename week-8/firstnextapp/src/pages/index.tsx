import type { NextPage } from 'next';
import { VideoCard } from '../components/VideoCard'; // Ensure correct import path and named import
import { VideoGrid } from '@/components/VideoGrid';
import { Appbar } from '@/components/Appbar';

const Home: NextPage = () => {
  return <>
     <Appbar/>
    <VideoGrid/>

  </> 
 
};

export default Home;
