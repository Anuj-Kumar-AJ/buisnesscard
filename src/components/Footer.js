import React from "react";
import '../index.css';


import githubIcon from '../assets/Github.png'
import twitterIcon from '../assets/twitter.png'
import linkedInIcon from '../assets/linkedin.png'
export default function Footer(){

    return(
        <div className="w-20 flex justify-center content-center">
            <a href="https://github.com/Anuj-Kumar-AJ"><img src={githubIcon}/></a>
            <a href="https://twitter.com/AnujAJtwt"><img src={twitterIcon}/></a>
            <a href="https://www.linkedin.com/in/anuj-kumar-aj639/"><img src={linkedInIcon}/></a>
        </div>
    )
}