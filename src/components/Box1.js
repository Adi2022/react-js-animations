import React, { useState } from 'react'
import{motion} from 'framer-motion'
const Box1 = () => {

  const[animate,setAnimate]=useState(false);
  return (
    <div className='box-container'>
    <motion.div 
    className='box' style={{opacity:'0.2'}}
    animate={{
    x:animate ? '50rem':0 ,
    opacity:animate ? 1: 0.5,
    //  scale:'1',
    rotate:animate ? 360: 0,
    }}

    initial={{
        opacity:'0.5'
    }}
    transition={{
        //  duration:'2',
        type:'spring',
        stiffness:'100',
        // damping:'40'
    }}

    onClick={()=>setAnimate(!animate)}
    
    >Rotate Me!!

    </motion.div>
    </div>
  )
}

export default Box1;