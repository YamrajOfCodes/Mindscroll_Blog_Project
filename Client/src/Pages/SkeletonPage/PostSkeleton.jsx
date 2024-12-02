import React from 'react'

const PostSkeleton = () => {
  return (
    <div>
        <div className='my-10 '>
            <div className="top w-11/12 mx-auto flex flex-col gap-2 md:w-11/12">
                <h1 className='font-bold capitalize sm:text-xl md:text-2xl lg:text-3xl xl:text-center xl:text-4xl bg-gray-300 w-full h-7 animate-pulse'></h1>
                <p className='text-sm text-center xl:text-lg  bg-gray-300 w-20 flex justify-center h-4 mx-auto animate-pulse'></p>
                <p className='text-sm text-center xl:text-lg  bg-gray-300 w-20 flex justify-center h-4 mx-auto animate-pulse'><strong></strong></p>
                <div className="bottom img flex flex-col   ">
                    <div className="mx-auto w-full text-center  bg-gray-300 w-full flex justify-center h-52 animate-pulse">
                    </div>
                    <p className='text-sm md:text-lg leading-6 my-1 bg-gray-300 h-4 w-full animate-pulse'></p>
                    <p className='text-sm md:text-lg leading-6 my-1 bg-gray-300 h-4 w-full animate-pulse'></p>
                    <p className='text-sm md:text-lg leading-6 my-1 bg-gray-300 h-4 w-full animate-pulse'></p>
                    <p className='text-sm md:text-lg leading-6 my-1 bg-gray-300 h-4 w-full animate-pulse'></p>

                </div>
                <div className='text-end flex justify- mb-60'></div>
                 
            </div>
        </div>
    </div>
  )
}

export default PostSkeleton
