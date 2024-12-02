import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Login, Logout, userVerify } from '../../Redux/Slice/UserSlice/userSlice';
import { Createpost } from '../../Redux/Slice/postSlice/postSlice';
import { toast } from 'react-toastify';

const Header = () => {

  const [count,setcount] = useState(0);


  const {userverify} = useSelector((state)=>state.user);
  const {singlepost} = useSelector((state)=>state.post);
 


  



  const [show,setshow]=useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logins,setlogins]=useState({
    heading:"",
    content:""
  });

  const [img,setimg]=useState("");

  
 



  const callanapi= (e)=>{

    e.preventDefault();

    dispatch(userVerify());


    const {heading,content} = logins
    const postuser=userverify[0]?._id;
    const postusername = userverify[0]?.Firstname
  
    if(heading == ""){
      toast.error("please Enter heading")
    }else if(content == ""){
      toast.error("content is required");
    }else if(userverify[0] == undefined ){
      console.log("hello");
      
       toast.error("please Login First");
    }else{



      
      const data = new FormData();
      data.append("heading",heading);
      data.append("content",content);
      data.append("post",img);
      data.append("postuser",postuser)
      data.append("postusername",postusername)
      
      const config = {
        "Content-Type": "multipart/form-data"
      }
      
      
      const datasend = {
        data,
        config
      }
      
      
      dispatch(Createpost(datasend)).then((res)=>{
        if(res.payload){
          navigate("/");
          setshow(false)
        }
      })
      
    }
    
    
  }

  const userLoggedinapi = ()=>{
    dispatch(userVerify());
  }

  useEffect(()=>{
    dispatch(userVerify());
  },[])

  
const handlelogout = (e)=>{
   dispatch(Logout());
    localStorage.removeItem("user");
    navigate("/");
}


const setshowbtn = ()=>{
    setshow(!show);
}

useEffect(()=>{
  userLoggedinapi();
},[])




  
  return (
       <>
         <nav className='w-11/12  mx-auto flex justify-between my-2 xl:w-9/12 z-10'>
         <div className="left">
        <Link to={"/"}><h1 className='font-bold cursor-pointer sm:text-2xl'>MindScroll</h1></Link>
        </div>
        <div className="right flex gap-4 items-center">
        <h4 className='text-sm cursor-pointer sm:text-lg' onClick={setshowbtn}>Create New Post</h4>
        {
          userverify[0] !== undefined ?    <>
          
          <Link to={"/login"} onClick={handlelogout}><h4 className='text-sm cursor-pointer sm:text-lg'>Logout</h4></Link>
          </> :   <Link to={"/login"}><h4 className='text-sm cursor-pointer sm:text-lg'>Login</h4></Link>
        }
        </div>
        </nav>
  {
    show ? <> 
    
    <div className="popup fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
  <div className="w-10/12 sm:w-96 mx-auto my-7 bg-white rounded-md px-5 h-5/6 sm:h-3/4">
    <div className="flex justify-between items-center py-5">
      <h1 className="text-2xl font-bold">Create New Post</h1>
      <p onClick={setshowbtn} className="font-bold text-2xl cursor-pointer">X</p>
    </div>
    <form className="my-5 flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <label htmlFor="Heading" className="text-sm">Heading</label>
        <input
          type="text"
          className="h-10 w-full px-4 rounded-sm border outline-none focus:ring-2 focus:ring-blue-500"
          id="heading"
          name="heading"
          value={logins.heading}
          onChange={(e) => setlogins({ ...logins, heading: e.target.value })}
          placeholder=""
        />
      </div>
      <div className="flex flex-col gap-2">
        <input
          type="file"
          onChange={(e) => setimg(e.target.files[0])}
          className="border p-2 rounded-sm"
        />
        <label htmlFor="content" className="text-sm">Content</label>
        <textarea
          id="content"
          rows={10}
          className="border outline-none p-2 rounded-sm resize-none"
          value={logins.content}
          onChange={(e) => setlogins({ ...logins, content: e.target.value })}
        ></textarea>
      </div>
      <div className="text-center">
        <button
          className="bg-green-500 hover:bg-green-400 active:bg-green-600 px-10 py-2 w-full text-white rounded-sm shadow-md cursor-pointer"
          onClick={callanapi}
        >
          Create Post
        </button>
      </div>
    </form>
  </div>
</div>

    </> : ""
  }
       </>
    
  )
}

export default Header
