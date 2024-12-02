import React from 'react'

const Skeleton = () => {
  return (
    <div className='flex flex-col gap-4 sm:flex-row md:gap-7 lg:gap-8 shadow-md p-5'>
    <div className="left w-11/12 mx-auto lg:w-9/12 xl:w-6/12 bg-gray-300 h-32 lg:h-60 xl:h-52 rounded-md animate-pulse">
        
    </div>
    <div className="right flex flex-col gap-2 w-11/12 mx-auto">
    <h1 className='font-bold text-sm sm:text-lg md:text-2xl capitalize xl:text-3xl cursor-pointer hover:text-blue-500 visited::text-blue-500 h-7 bg-gray-300'></h1>
        <p className='text-sm md:text-md bg-gray-300 h-4 w-8 animate-pulse '> <p className='bg-gray-300 h-4 w-8 ml-10 '></p></p>
        <div className="para text-sm sm:text-md md:text-lg ">
           <p className='bg-gray-300 h-4 mt-2 animate-pulse'></p>
           <p className='bg-gray-300 h-4 mt-2 animate-pulse'></p>
           <p className='bg-gray-300 h-4 mt-2 animate-pulse'></p>
           <p className='bg-gray-300 h-4 mt-2 animate-pulse'></p>
        </div>
    </div>
</div>
  )
}

export default Skeleton
