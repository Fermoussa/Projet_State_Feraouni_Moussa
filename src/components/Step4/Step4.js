import React from 'react';
import './Step4.css'

function Step4(props) {
  console.log(props.periodefinale);

  let a = (props.prixfinale + props.totaladd)
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
            {/* <span> {props.totaladd} </span> */}
          </div>

          <div className="retour">
            <span onClick={()=> props.setLink(2)}> Change </span>
          </div>


          <div className="choixpub">
            {
              props.tab.map((item,index)=>(
                <div className='pub'>
                  <span className='add'> {item.pub} </span>
                  <span> +${item.prix}/mo </span>
                </div>
              ))
            }
          </div>

        </div>

      </div>

      <div className="total">
            <span> Total {a} </span>
        </div>

    </div>
  )
}

export default Step4