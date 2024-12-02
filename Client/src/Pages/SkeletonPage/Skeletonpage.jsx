import React, { useEffect } from 'react'
import Skeleton from '../../Componets/Skeleton/Skeleton'
import { toast } from 'react-toastify';

const Skeletonpage = () => {

  
    
  return (
    <div>
      {
        Array.from({length:10}).map((element)=>{
            return(
                <>
                <Skeleton/>
                </>
            )
        })
      }
    </div>
  )
}

export default Skeletonpage
