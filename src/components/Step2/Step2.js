import React, { useState } from 'react';
import './Step2.css'
import arcade from '../../assets/arcade.svg'


function Step2() {

  const[prixarcade, setPrixarcade] = useState(9);
  const[periode, setPeriode] = useState("mo");

  return (
    <div className='page2'>

      <div className="titre">
        <h2> Select your plan </h2>
        <span> you have the option of monthly or yearly billing. </span>
      </div>

      <div className="choixplan">

        <div className="plan">
          <div> <img src={arcade} alt="" /> </div>
          <div className='detailplan'>
            <span> Arcade </span>
            <span> ${prixarcade}/{periode} </span>
          </div>
        </div>

        <div className="plan">
          <div> <img src={arcade} alt="" /> </div>
          <div className='detailplan'>
            <span> Arcade </span>
            <span> ${prixarcade}/{periode} </span>
          </div>
        </div>

        <div className="plan">
          <div> <img src={arcade} alt="" /> </div>
          <div className='detailplan'>
            <span> Arcade </span>
            <span> ${prixarcade}/{periode} </span>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Step2