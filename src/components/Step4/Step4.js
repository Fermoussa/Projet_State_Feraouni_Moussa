import React from 'react';
import './Step4.css'

function Step4(props) {
  console.log(props.periodefinale);
  return (
    <div className='page4'>

      <div className="titre">
        <h2> Finishing up </h2>
        <span> Double-check everything looks OK before confirming.  </span>
      </div>

      <div className="recap">

        <div className="plan">
          <div className="detailplan">
            <span> {props.planfinale}({props.periodefinale}) </span> 
            <span>${props.prixfinale}/{props.timeabo} </span>
          </div>

          <div className="retour">
            <span onClick={()=> props.setLink(2)}> Change </span>
          </div>


        </div>

      </div>

    </div>
  )
}

export default Step4