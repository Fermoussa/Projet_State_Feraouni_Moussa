import React from 'react';
import './Step1.css'
import { useState } from 'react';

function Step1(props) {

    // const [nom, setNom] = useState("");
    // const [mail, setMail] = useState("");
    // const [phone, setPhone] = useState("");

    return (
        <div className='page1'>
            <div className="titre">
                <h2> Personnal info </h2>
                <span> Please provide your name, email address, and phone number. </span>
            </div>

            <div className="information">
                <span> Your name is: {props.nom} </span>
                <input type="text" value={props.nom} placeholder='Name' onChange={(e)=>props.setNom(e.target.value)} />
            </div>

            <div className="information">
                <span> Your email is: {props.mail} </span>
                <input type="text" value={props.mail} placeholder='youremail@gmail.com' onChange={(e)=>props.setMail(e.target.value)} />
            </div>

            <div className="information">
                <span> Your phone number is: {props.phone} </span>
                <input type="text" placeholder='e.g. +1 234 567 890' value={props.phone} onChange={(e)=>props.setPhone(e.target.value)} />
            </div>

            <div className="suivant">
                <button onClick={() => props.setLink(props.link + 1)}> Next Step  </button>
            </div>

        </div>
    )
}

export default Step1