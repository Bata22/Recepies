import Home from "./Home"
import {Route, Routes, useLocation} from 'react-router-dom';
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recepie from "./Recepie";
import {AnimatePresence} from'framer-motion';
function Pages() {

  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes Location={location} key={location.pathname} >
          <Route path="/" element={<Home/>}/>
          <Route path="/cuisine/:type" element={<Cuisine />}/>
          <Route path="/searched/:search" element={<Searched />}/>
          <Route path="/recepie/:name" element={<Recepie />}/>

      </Routes>
    </AnimatePresence> 
     
  )
}

export default Pages