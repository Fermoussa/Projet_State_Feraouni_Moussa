import React, { useState } from 'react';
import './Step2.css';
import arcade from '../../assets/arcade.svg';
import advanced from '../../assets/advenced.svg';
import pro from '../../assets/pro.svg';



function Step2(props) {

  const[prixarcade, setPrixarcade] = useState(9);
  const[prixadvanced, setPrixadvanced] = useState(12);
  const[prixpro, setPrixpro] = useState(15);
  const[periode, setPeriode] = useState("mo");

  const[verif,setVerif] = useState(false)

  function annee(e){
    if(verif === false){
      e.target.style.justifyContent = "end";
      
      setPrixarcade(prixarcade*10);
      setPrixadvanced(prixadvanced*10);
      setPrixpro(prixpro*10);
      setPeriode("year");
      setVerif(true)
    }

    else{
      e.target.style.justifyContent = "start";
      setPrixarcade(prixarcade/10);
      setPrixadvanced(prixadvanced/10);
      setPrixpro(prixpro/10);
      setPeriode("mo");
      setVerif(false)
    }

  }

  function choixplan(e){
    let choice = e.currentTarget.className;
    // e.currentTarget.classList.add("active");


    if(choice.includes("plan arcade")){
      console.log(`le prix arcade : ${prixarcade}`);
      props.setTotal(prixarcade);
      console.log(`Le total ${props.total}`);
      // e.currentTarget.classList.add("active");
    }
    else if(choice.includes("plan adv")){
      console.log(`le prix adv : ${prixadvanced}`);
      props.setTotal(prixadvanced);
      console.log(`Le total ${props.total}`);
      // e.currentTarget.classList.add("active");
    }
    else if(choice.includes("plan pro")){
      console.log(`le prix pro : ${prixpro}`);
      props.setTotal(prixpro);
      console.log(`Le total ${props.total}`);
      // e.currentTarget.classList.add("active");
    }

  }




  return (
    <div className='page2'>

      <div className="titre">
        <h2> Select your plan </h2>
        <span> you have the option of monthly or yearly billing. </span>
      </div>

      <div className="choixplan">

        <div className= {`plan arcade ${props.total == 9 || props.total == 90 ? "active" : null}`} onClick={choixplan}>
          <div> <img src={arcade} alt="" /> </div>
          <div className='detailplan'>
            <span> Arcade </span>
            <span className='prix'> ${prixarcade}/{periode} </span>
          </div>
        </div>

        <div className={`plan adv ${props.total == 12 || props.total == 120 ? "active" : null}`} onClick={choixplan}>
          <div> <img src={advanced} alt="" /> </div>
          <div className='detailplan'>
            <span> Advanced </span>
            <span className='prix'> ${prixadvanced}/{periode} </span>
          </div>
        </div>

        <div className={`plan pro ${props.total == 15 || props.total == 150 ? "active" : null}`} onClick={choixplan}>
          <div> <img src={pro} alt="" /> </div>
          <div className='detailplan'>
            <span> Pro </span>
            <span className='prix'> ${prixpro}/{periode} </span>
          </div>
        </div>

      </div>

      <div className='switch'>
        <div> Montlhy </div>   
        <button className='btn' onClick={annee}> <div className="rond"></div> </button>
        <div> Yearly </div> 
      </div>

      <div className="pass">
        <button className='goback' onClick={()=> props.setLink(props.link - 1)}> Go Back </button>
        <button onClick={()=> props.setLink(props.link + 1)}> Next Step  </button>
      </div>

    </div>
  )
}

export default Step2