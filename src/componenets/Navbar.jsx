import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import BeenhereIcon from '@material-ui/icons/Beenhere'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Navbar= () =>{
    return(
        <>
            
<div className="vertical-nav bg-white" id="sidebar">
  <div className="py-4 px-3 mb-4 bg-light">
    <div className="media d-flex align-items-center">
    <img src="https://res.cloudinary.com/mhmd/image/upload/v1556074849/avatar-1_tcnd60.png" alt="..." width="65" className="mr-3 rounded-circle img-thumbnail shadow-sm"/>
      <div className="media-body">
        <h4 className="m-0 font-weight-bold">
        <NavLink 
        to="/"  
        className="text-dark text-decoration-none">MEME MARKETPLACE</NavLink>
        </h4>
      </div>
    </div>
  </div>

     <ul className="nav flex-column bg-white mb-0">
            
            <li className="dank nav-item mt-3">
            <NavLink 
             activeClassName="menu_active" 
             className="text-dark font-weight-bold text-uppercase px-3 small pb-5 mb-0 text-decoration-none"
             exact
             to="/" >
             <HomeIcon />
             Home</NavLink></li>  
            <hr/>
           
            <li className="dank nav-item mt-3">
            <NavLink activeClassName='menu_active' 

            className="text-dark font-weight-bold text-uppercase px-3 small pb-5 mb-0 text-decoration-none"
            exact
            to="/dank" >
            <LocalGroceryStoreIcon />
            Dank Registry</NavLink></li>
                    
            <li className="nav-item mt-2">
            <NavLink 
            activeClassName="menu_active" 

            className="text-dark font-weight-bold text-uppercase px-4 small pb-4 mb-0 text-decoration-none"
            exact
            to="/submit" >
            Submit</NavLink></li> 
            
            <li className="nav-item mt-2">
            <NavLink 

            activeClassName="menu_active"  
            className="text-dark font-weight-bold text-uppercase px-4 small pb-4 mb-0 text-decoration-none"
            exact
            to="/vote">
            Vote</NavLink></li> 
           
            <li className="nav-item mt-2">
            <NavLink activeClassName="menu_active" 
            className="text-dark font-weight-bold text-uppercase px-4 small pb-4 mb-0 text-decoration-none"

            exact
            to="/challenge" >
            Challenge</NavLink></li> 
             <hr/>
   
            <li className="dank nav-item mt-3">
            <NavLink activeClassName="menu_active"  

            className="text-dark font-weight-bold text-uppercase px-3 small pb-4 mb-0 text-decoration-none"
            exact
            to="/leaderboard">
            <EmojiEventsIcon />
            Leaderboard</NavLink></li> <hr/>
            
            <li className="dank nav-item mt-3">
            <NavLink activeClassName="menu_active"  

            className="text-dark font-weight-bold text-uppercase px-3 small pb-4 mb-0 text-decoration-none"
            exact
            to="/about">
            <BeenhereIcon />
            About</NavLink></li> <hr/>
            
            <li className="dank nav-item mt-3">
            <NavLink activeClassName="menu_active" 

            className="text-dark font-weight-bold text-uppercase px-3 small pb-4 mb-0 text-decoration-none"
            exact
            to="/leaderboard" >
            <ExitToAppIcon />
            Log-out</NavLink></li>
  </ul>
</div>
         
        </>
    );
};


export default Navbar;