import React,{useState} from "react";
import {ReactComponent as Homeicon} from '../img/house-door-fill.svg';
import {ReactComponent as Searchicon}  from '../img/search.svg';
import { ReactComponent as Libraryicon } from  '../img/music-note-list.svg';
import { Link } from "react-router-dom";
import { ReactComponent as About } from '../img/about-svgrepo-com.svg';
import { ReactComponent as Contactus } from '../img/contact-us-filled-svgrepo-com.svg';
import { ReactComponent as Admin } from '../img/admin-svgrepo-com.svg';
import { ReactComponent as MusicLogo } from '../img/apple-music-logo-svgrepo-com.svg';
const Nav=()=>
{

  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

    return(
        <div className='navBar'>
        <div className='logo'>
          <MusicLogo />

        </div>
             <ul>
             <Link to="/" onClick={() => handleLinkClick("home")}>
               <li className={activeLink === "home" ? "active" : ""}>
                 <Homeicon /> Home
               </li>
             </Link>
             <Link to="/search" onClick={() => handleLinkClick("search")}>
               <li className={activeLink === "search" ? "active" : ""}>
                 <Searchicon /> Search
               </li>
             </Link>
             <Link to="/library" onClick={() => handleLinkClick("library")}>
               <li className={activeLink === "library" ? "active" : ""}>
                 <Libraryicon /> Your Library
               </li>
             </Link>
             <Link to="/about" onClick={() => handleLinkClick("about")}>
               <li className={activeLink === "about" ? "active" : ""}>
                 <About /> About
               </li>
             </Link>
             <Link to="/contact" onClick={() => handleLinkClick("contact")}>
               <li className={activeLink === "contact" ? "active" : ""}>
                 <Contactus /> Contact Us
               </li>
             </Link>
             <Link to="/admin" onClick={() => handleLinkClick("admin")}>
               <li className={activeLink === "admin" ? "active" : ""}>
                 <Admin /> Admin
               </li>
             </Link>
           </ul>
      <div className="cookies">
        <span>Cookies</span>
        <span>Privacy Policy</span>
      </div>  
      </div>
    );
};

export default Nav;