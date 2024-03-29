import Veggie from "../components/Veggie";
import Pouplar from "../components/Pouplar";
import {motion} from 'framer-motion';
import React from 'react'

function Home() {
  return (
    <motion.div
    animate={{opacity:1}}
    initial= {{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.5}}> 
         
        <Veggie />
        <Pouplar />
    </motion.div>
  )
}

export default Home