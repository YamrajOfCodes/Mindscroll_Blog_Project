import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Post = ({content,heading,postimg,id,postusername,Date}) => {


    return (
        <div className='flex flex-col gap-4 sm:flex-row md:gap-7 lg:gap-8 shadow-md p-5'>
            <div className="left w-11/12 mx-auto lg:w-9/12 xl:w-6/12">
                <img src={postimg} className='rounded-md' alt="content-img" srcset="" />
            </div>
            <div className="right flex flex-col gap-2 w-11/12 mx-auto">
                <Link to={`/${id}`}><h1 className='font-bold text-sm sm:text-lg md:text-2xl capitalize xl:text-3xl cursor-pointer hover:text-blue-500 visited::text-blue-500'>{heading}</h1>                </Link>
                <p className='text-sm md:text-md'> <strong>{postusername}</strong> {Date}</p>
                <div className="para text-gray-700 text-sm sm:text-md md:text-lg ">
                    {
                        <Link to={`/${id}`}>{content.substring(0,200)}</Link>
                    }...
                </div>
            </div>
        </div>
    )
}

export default Post
