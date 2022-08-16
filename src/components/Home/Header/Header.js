import React from 'react'
import './Header.css'
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import logo from './mainimage.png';

function Header() {
  return (
    <div className="wholeheader">
        
        <div className="upblack">
            <div><h3 className="changeonhover" style={{paddingLeft: '10px', paddingRight: '10px', position: 'relative', left: '10px'}}>info@example.com</h3></div>
            
            <div className="inupblack">
                <a href="google.com">
                    <FaUserAlt className="changeonhover" color="white"></FaUserAlt>
                </a>
                <h3 className="changeonhover" style={{paddingLeft: '10px', paddingRight: '10px'}}>INR</h3>
            </div>
            

        </div>
        
        <div className="bottommenubar">
            <div className="menu">
                <AiOutlineMenu></AiOutlineMenu>

                <h3 className="menutext" style={{paddingLeft : '5px'}}>Menu</h3>

            </div>
            
            <div  ><img className="mainimage" src={logo} alt="" /></div>
            

        </div>
        
        
    </div>
  )
}

export default Header