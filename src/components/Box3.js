import React, { useState } from "react";
import { motion } from "framer-motion";
const Box3 = () => {
  const boxVariant = {
    hidden: {
      x: "-100vw",
    },

    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        when:'beforeChildren'
      },
    },
  };

  const listVariant = {
    hidden: {
      x: "-10",
      opacity:0
    },

    visible: {
      x: 0,
      opacity:1,
      staggerChildren:1
    },
  };

  // const boxVariant={
  //     vari1:{
  //         x:100,
  //         scale:1,
  //         backgroundColor:'red'
  //     },
  //     vari2:{
  //         x:200,
  //         scale:0.4,
  //         backgroundColor:'black'

  //     }

  // }

  return (
    <div className="box-container">
      <motion.div
        className="box"
        variants={boxVariant}
        animate="visible"
        initial="hidden"
        // variants={boxVariant}
        // initial='vari1'
        // animate='vari2'
      >
        {[1, 2, 3].map((box) => {
          return (
            <motion.li
              className="boxItems"
              
              variants={listVariant}
            ></motion.li>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Box3;
