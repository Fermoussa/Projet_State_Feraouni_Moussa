import React from 'react';
import './Step1.css'

function Step1(props) {

  return (
    <div className='page1'>
        <div className="titre">
            <h2> Personnal info </h2>
            <span> Please provide your name, email address, and phone number. </span>
        </div>

        <div className="information">
            <span> Your name is: </span>
            <input type="text" placeholder='Name'/>
        </div>

        <div className="information">
            <span> Your email is: </span>
            <input type="text" placeholder='youremail@gmail.com'/>
        </div>

        <div className="information">
            <span> Your phone number is: </span>
            <input type="text" placeholder='e.g. +1 234 567 890'/>
        </div>

        <div className="suivant">
            <button onClick={()=> props.setLink(props.link + 1)}> Next Step  </button>
        </div>

    </div>
  )
}

export default Step1