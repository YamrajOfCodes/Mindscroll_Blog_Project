import Footer from "./Componets/Footer/Footer"
import Header from "./Componets/Header/Header"
import Layout from "./Layout/Layout"
import {Route,Routes} from "react-router-dom"
import Post from "./Pages/Post/Post"
import Popup from "./Componets/Popup/Popup"
import { lazy, Suspense } from "react"
import Skeleton from "./Componets/Skeleton/Skeleton"
import Skeletonpage from "./Pages/SkeletonPage/Skeletonpage"
import PostSkeleton from "./Pages/SkeletonPage/PostSkeleton"
import Loader from "./Componets/Loader/Loader"

const LoginSignup = lazy(()=>import("./Pages/Login or Signup/LoginSignup")); 
const Home  = lazy(()=>import("./Pages/Home/Home"));



const wait = (time)=>{
  return new Promise((res)=>{
    setTimeout(()=>{
      res();
    },time)
  })
}

function App() {

  
 
  return (
    <div>
    <Routes>
    <Route path="/" 
  element={
    <Layout>
      <Suspense >
        <Home />
      </Suspense>
    </Layout>
  } 
/>

<Route path="/:id" 
  element={
    <Layout>
      <Suspense fallback={<PostSkeleton/>} >
        <Post />
      </Suspense>
    </Layout>
  }
/>

<Route path="/login" 
  element={
    <Layout>
      <Suspense fallback={<Skeletonpage />}>
        <LoginSignup />
      </Suspense>
    </Layout>
  } 
/>

    </Routes>
      <Popup/>
 

     

  </div>
  )
}

export default App
