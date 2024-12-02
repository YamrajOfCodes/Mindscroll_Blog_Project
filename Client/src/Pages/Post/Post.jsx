import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { addComment, addLike, deletePost, getComment, getsinglePost, removeLike } from '../../Redux/Slice/postSlice/postSlice';
import { MdDelete } from "react-icons/md";
import { toast } from 'react-toastify';
import { LuThumbsUp } from "react-icons/lu";
import { userVerify } from '../../Redux/Slice/UserSlice/userSlice';
import avtar from "./avtar.png"
import { IoSend } from "react-icons/io5";
import Comments from '../../Componets/Comments/Comments';
import Loader from '../../Componets/Loader/Loader';



const Post = () => {

    const {id} = useParams();
    // console.log(id);

    const {getcomments} = useSelector((state)=>state.post);
    // console.log(getcomments);
    
    const {addcomment} = useSelector((state)=>state.post);
    // console.log(addcomment);
    
    const navigate = useNavigate();

    const [bgred,setbgred]=useState(false);
    let color = false;

    const [loader,setloader]=useState(false);

    const {singlepost} = useSelector((state)=>state.post);
    // console.log(singlepost[0]);

    const {likes}=useSelector((state)=>state.post)
    const {removelike}=useSelector((state)=>state.post);
    // console.log(removelike);


    const {userverify} = useSelector((state)=>state.user);
    // console.log(userverify.length);

    let arr = [];

    arr = singlepost[0]?.likes.map((element)=>{
        return element.name
    })

   

    // console.log(arr);

    let istrue = true;

    istrue = arr?.filter((element)=>{
        return element === userverify[0]?.Firstname
    })

    // console.log(istrue?.[0]);
    
    

   if(istrue?.[0] === userverify[0]?.Firstname ){
    // console.log("true");
   color = true    
   }else{
    color = false
   }
    
    
    // console.log(likes[0]);

    // console.log(singlepost[0]?.likes[0]?.name);
    
 
   
       
    // if(likes?.[0]?.length > 0){
    //   if(likes?.[0]?.name == userverify[0].Firstname){
    //     setbgred(true)
    //   }
    // }
    
    
    
    
    
    
    
  

    


    
     let deletepost = false;



    // console.log(login);

    const loginid = userverify[0]?._id;
    const postuser = singlepost[0]?.postuser;

     if(loginid == postuser){
        deletepost = true
        // console.log(deletepost);
        
     }     

    


    const [register,setregister]=useState({
        Firstname:"",
        Lastname:"",
        email:"",
        password:"",
        phone:""
    })

    const dispatch = useDispatch();

    const callApi = ()=>{
          dispatch(getsinglePost(id));
          dispatch(getComment(id));
    }

    const deletesinglepost = ()=>{
        dispatch(deletePost(id)).then((res)=>{
            if(res.payload){
                navigate("/");
            }else{
              toast.success("post deleted");
              setTimeout(() => {
                navigate("/");
              }, 3000);
            }
        })
    }

    const addlikeapi = (e)=>{
        setloader(true);
        setbgred(!bgred);

        if(userverify[0]==undefined){
            navigate("/login")
        }
        const data={
            id,
            name:userverify[0]?.Firstname,
            red:bgred
        }
        

        if(bgred){
           dispatch(removeLike(data)).then((res)=>{
            if(res){
                setloader(false);
                // console.log("come");
                
            }
           })
        // console.log("removelike");
        
    }else{
        // console.log(data);
        
        dispatch(addLike(data)).then((res)=>{
            if(res){
                setloader(false);
                // console.log("come");
                
            }
           })
        // console.log("addlike");
            
        }

    }


    const [comment,setcomment] = useState("")

    const addcomments = (e)=>{
         e.preventDefault();

        //  console.log("user",userverify[0]);
         

         if(userverify[0] == undefined){
            return toast.error("you have to login before adding");
         }

         if(comment === ""){
           return toast.error("please add comment")
         }else{
            const data = {
                id,
                username: userverify[0]?.Firstname,
                comment
            }

            dispatch(addComment(data)).then((res)=>{
                if(res.payload){
                    setcomment("");
                }else{
                    console.log("error");
                    
                }
            })
         }
         
         
    }
    
    

    

    useEffect(()=>{
         callApi();
    },[likes,removelike,addcomment]);

   
  



    
    return (
        <div className='my-10'>
            {
                 loader ? <Loader/> : ""
            }
            <div className="top w-11/12 mx-auto flex flex-col gap-2 md:w-11/12">
                <h1 className='font-bold capitalize sm:text-xl md:text-2xl lg:text-3xl xl:text-center xl:text-4xl  mx-auto'>{singlepost[0]?.heading}</h1>
                <p className='text-sm text-center xl:text-lg'>{singlepost[0]? `Date:${singlepost[0]?.Date}`  : ""}</p>
                <p className='text-sm text-center xl:text-lg'><strong> {singlepost[0]? `By ${singlepost[0]?.postusername}` : ""}</strong></p>
                <div className="bottom img flex flex-col gap-2 lg:gap-4  ">
                    <div className="mx-auto w-full text-center">
                        <img src={singlepost[0]?.postimg} className='xl:w-10/12 2xl:w-7/12 mx-auto ' alt="" srcset="" />
                    </div>
                    <p className='text-sm md:text-lg leading-6 my-2'>{singlepost[0]?.content}</p>
                </div>
                <div className='text-end flex justify-between mt-4'>
                <span className='flex gap-1'><LuThumbsUp className={`cursor-pointer text-2xl sm:text-3xl lg:text-4xl ${color ? "fill-red-400" : "fill-white"}`}  onClick={addlikeapi}/>{singlepost[0]?.likes.length}</span>
                {deletepost ? 
                <button className='flex shadow-sm cursor-pointer hover:shadow-md p-2 '><p className='my-auto'>Delete</p><MdDelete  className='text-red-600 text-2xl md:mr-10  lg:mr-20 xl:mr-32 cursor-pointer' onClick={deletesinglepost}/></button> : ""}
                    </div>
                 
            </div>
            <div className='comments w-full h-8 border-b-2 ext-sm mt-5 ml-2 md:mt-5 lg:mt-14'>Comments({getcomments?.length})</div>
            <div className="comment-container h-auto mx-auto mt-2  w-full sm:mt-5">
                <div className="comment-box flex gap-2 w-full ml-2 items-center ">
                    <img src={avtar} alt="avtar png" srcset="" className='w-1/12 md:w-12' />
                    <input type="text" className='px-4 border w-9/12 outline-none sm:h-12 rounded-sm' placeholder='Join the discussion'value={comment} onChange={(e)=>{setcomment(e.target.value)}} />
                    <button className='cursor-pointer'><IoSend className='sm:text-2xl md:text-3xl'  onClick={addcomments}/></button>
                </div>
                {
                    getcomments?.map((element)=>{
                        return (
                            <>
                            <Comments comment={element.comment} username={element.username} />
                            </>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Post
