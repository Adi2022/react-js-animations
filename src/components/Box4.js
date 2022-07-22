import React, { useState } from 'react'
import{motion} from 'framer-motion'
const Box4 = () => {

  const[animate,setAnimate]=useState(false);
  return (
    <div className='box-container'>
    <motion.div 
    className='box' 
    animate={{
    scale:[1,1.4,1.4,1,1],
    borderRadius:['20%','20%','50%','50%','20%'],
    rotate:[0,0,360,360,0]
   }}

   transition={{
    duration:2
   }}
    >Rotate Me PLease!!

    </motion.div>
    </div>
  )
}

export default Box4;