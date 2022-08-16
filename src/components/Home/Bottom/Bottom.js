import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import './Bottom.css'

function Bottom() {
  return (
    <div className="maindiv">
        <div className="wearesocial">
            <h1>WE ARE SOCIAL</h1>
            <a href="https://www.facebook.com/"><FaFacebookF className="socialicon"></FaFacebookF></a>
            <a href="https://twitter.com/"><FaTwitter className="socialicon"></FaTwitter></a>
            <a href="https://instagram.com/"><AiOutlineInstagram className="socialicon"></AiOutlineInstagram></a>
            <a href="https://linkedin.com/"><AiFillLinkedin className="socialicon"></AiFillLinkedin></a>

        </div>
        <div className="copyright">
            <h3>c: 2022 Burgershop</h3>
        </div>
    </div>
  )
}

export default Bottom