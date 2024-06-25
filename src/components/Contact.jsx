import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact">
        <div className="contact-icon">
          <a href="#" className="items"><FaInstagram className="icons"/></a>
          <a href="#" className="items"><CiFacebook className="icons"/></a>
          <a href="#" className="items"><CiLinkedin className="icons"/></a>
          <a href="#" className="items"><FaSquareXTwitter className="icons"/></a>
          <a href="#" className="items"><FaGithubSquare className="icons"/></a>
          <a href="#" className="items"><SiGmail className="icons"/></a>
        </div>
      </div>
    </>
  )
}

export default Contact
