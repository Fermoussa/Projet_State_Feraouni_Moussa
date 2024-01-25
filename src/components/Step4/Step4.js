import React from 'react';
import './Step4.css'

function Step4(props) {
  console.log(props.periodefinale);

  let a = (props.prixfinale + props.totaladd)

  props.setFin(props.prixfinale + props.totaladd);

  function promo(e){
    // props.setFin(props.prixfinale + props.totaladd);

    if(e.key === 'Enter'){
      // console.log(e.target.value);
      if(e.target.value === "promo10"){
        // alert("code promo valide et activé")
        props.setFin(props.fin - (props.fin/100));
        console.log(props.fin);
      }
      else{
        alert("code promo non valide")
        // props.setFin(props.prixfinale + props.totaladd);
      }
    }
  }

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
                  <span className='prix'> +${item.prix}/{props.timeabo} </span>
                </div>
              ))
            }
          </div>

        </div>

      </div>

      <div className="total">
            <span> Total(per {props.timeabo}) </span> 
            <span className='prix'> ${props.fin}/({props.timeabo}) </span>
      </div>
{/* 
      <div className="promo">
        <input type="text" placeholder='code promo' name="" id="" onKeyDown={promo} />
      </div> */}

      <div className="pass3">
        <button className='goback' onClick={()=> props.setLink(props.link - 1)}> Go Back </button>
        <button onClick={()=> props.setLink(props.link + 1)}> Next Step  </button>
      </div>

    </div>
  )
}

export default Step4