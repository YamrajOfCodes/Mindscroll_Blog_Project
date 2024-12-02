import React, { useEffect, useState } from 'react'
import Post from '../../Componets/Post/Post'
import {useSelector,useDispatch} from "react-redux"
import { getallPosts } from '../../Redux/Slice/postSlice/postSlice';
import Skeleton from '../../Componets/Skeleton/Skeleton';
import Skeletonpage from '../SkeletonPage/Skeletonpage';

const Home = () => {

  const {posts} = useSelector((state)=>state.post);
  const dispatch = useDispatch();
  
  const [loader,setloader]=useState(true);
  

  

  


  const {createpost} = useSelector((state)=>state.post);

  

  function getposts(){
    dispatch(getallPosts()).then((res)=>{
      if(res.payload){
        // console.log("response has came");
        setloader(false);
      }
    });
  }

  useEffect(()=>{
   window.scrollTo(0,0);
  },[])



  useEffect(()=>{
    getposts();
  },[createpost]);

  if(loader){
    return <Skeletonpage/>
  }

 
  return (
    <div className='w-11/12 mx-auto my-10 flex flex-col gap-6 xl:w-9/12'>
     {
     posts[0]?.map((element)=>{
      return(
        <>
         <Post content={element.content} heading={element.heading} postimg={element.postimg} id={element._id} postusername={element.postusername ? element.postusername : "user"} Date={element.Date ? element.Date : "10/11/2024"}/>
        </>
      )
     })
     }
    </div>
  )
}

export default Home


// posts[0]?.map((element)=>{
//   return(
//    <>
//     <Post content={element.content} heading={element.heading} postimg={element.postimg} id={element._id} postusername={element.postusername ? element.postusername : "user"} Date={element.Date ? element.Date : "10/11/2024"}/>
//    </>
