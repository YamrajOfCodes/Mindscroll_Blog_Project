import React from 'react'
import avtar from "./avtar.png"

const Comments = ({comment,username}) => {
  return (
    <div className="comment-container h-auto mt-2 ml-2 w-full mx-auto mt-4 ">
    <div className="comment-box flex gap-2 w-full">
        <img src={avtar} alt="avtar png" srcset="" className='w-1/12 h-1/2 border md:w-12 ' />
        <div className="info">
            <h4 className='text-sm text-green-400'>{username}</h4>
            <p className='text-sm lg:text-lg'>{comment}</p>
        </div>
    </div>
</div>
  )
}

export default Comments
