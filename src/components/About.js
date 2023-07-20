
import React from "react";
import '../index.css';

import profilePic from '../assets/aj-pic.png'

export default function About() {
    return (
        <div className="">

            <div className="flex justify-center">
                <img src={profilePic} className="w-80 justify-center"/>
            
            </div>
            
            <div className="text-amber-600 items-start justify-center">
                <h1>Anuj Kumar</h1>
                <h4>OpenSource Contributor</h4>
                <br></br>
                <h7>anuj.website</h7>
            </div>
        </div>
    )
}