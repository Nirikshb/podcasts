import React from 'react'
import { Link, useLocation } from "react-router-dom";


const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log("Current Path");


  return (
    <div className="navbar">
       <div className='gradient'>
         <div className="links">
          <Link to="/" className={currentPath =="/" ? "active" : "" }>SignUp</Link>   
  
          <Link to="/start-a-podcast"
          className={currentPath == "/podcasts" ? "active" : ""}>Start A Podcast</Link>   
          
          <Link to="/profile"
          className={currentPath == "/start-a-podcast" ? "active" : ""}>Profile</Link>   
         </div>
       </div>
    </div>
  )
}

export default Header;