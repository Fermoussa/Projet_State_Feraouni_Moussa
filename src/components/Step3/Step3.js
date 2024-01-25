import React, { useEffect, useState } from 'react';
import './Step3.css'

function Step3(props) {

  const[online,setOnline] = useState(1);
  const[larger,setLarger] = useState(2);
  const[custom,setCustom] = useState(2);


  const[test, setTest] = useState(0);

  // if(props.timeabo == "yr"){
  //   setOnline(online * 10)
  // }


  function choixadd(e){
    // console.log(e.currentTarget);

    // let checkbox = document.getElementsByClassName("check");
    // checkbox.checked = !checkbox.checked;
    

    let a = e.currentTarget.className



    // if(isChecked == true){
    //   setIsChecked(false);
    // }

    if(a.includes("add online")){
      console.log(props.timeabo);
      // props.setTotal(props.total + online);
      e.currentTarget.classList.add("choisi");
      // if(props.timeabo == "mo"){
      //   setOnline(online)
      // }

      // else if(props.timeabo == "yr"){
      //   setOnline(online * 10)
      // }

      props.setAdd(online);
      setTest(1);



      props.setTab([...props.tab, {pub:"Online service", prix: online }]);
      props.setTotaladd(props.totaladd + online);

      if (props.tab.some(item => item.pub === "Online service" && item.prix === online)) {
        alert("choix supprimé");
        props.setTotaladd(props.totaladd - online);
        e.currentTarget.classList.remove("choisi");
        props.setTab(props.tab.filter(objet => objet.pub !== "Online service")) 
      }
      // checkbox.checked = !checkbox.checked;
    }

    else if(a.includes("add larger")){
      // props.setTotal(props.total + larger);
      e.currentTarget.classList.add("choisi");
      // if(props.timeabo == "mo"){
      //   setLarger(larger)
      // }

      // else if(props.timeabo == "yr"){
      //   setLarger(larger * 10)
      // }
      props.setAdd(larger);
      setTest(2);

      props.setTab([...props.tab, {pub:"Larger storage", prix: larger }]);
      props.setTotaladd(props.totaladd + larger);

      if (props.tab.some(item => item.pub === "Larger storage" && item.prix === larger)) {
        alert("choix supprimé");
        props.setTab(props.tab.filter(objet => objet.pub !== "Larger storage")) 
        e.currentTarget.classList.remove("choisi");
        props.setTotaladd(props.totaladd - larger);
      }

      
    }

    else if(a.includes("add custom")){
      // props.setTotal(props.total + custom);
      e.currentTarget.classList.add("choisi");
      // if(props.timeabo == "mo"){
      //   setCustom(custom)
      // }

      // else if(props.timeabo == "yr"){
      //   setCustom(custom * 10)
      // }
      props.setAdd(custom);
      setTest(3);

      props.setTab([...props.tab, {pub:"Customizable Profile", prix: custom }]);
      props.setTotaladd(props.totaladd + custom);
      

      if (props.tab.some(item => item.pub === "Customizable Profile" && item.prix === custom )) {
        alert("choix supprimé");
        props.setTab(props.tab.filter(objet => objet.pub !== "Customizable Profile")) 
        props.setTotaladd(props.totaladd - custom);
        e.currentTarget.classList.remove("choisi");
      }
    }

  }

  useEffect(()=>{
    // console.log(`le prix : ${online}`);
    // console.log(`Le total finale: ${props.total}`);
    console.log(props.tab);
    // console.log(`choix add ${props.add}`);
  },[props.add],[props.tab])

  return (
    <div className='page3'>

      <div className="titre">
        <h2> Pick add-ons </h2>
        <span> Add-ons help enhance your gaming experience. </span>
      </div>
      {/* {`add online ${test === 1 ? "actives" : null}`} 
      {`add larger ${test === 2 ? "actives" : null}`}
      {`add custom ${test === 3 ? "actives" : null}`} */}

      <div className="contentadd">

        <div className= "add online"  onClick={choixadd}>
          {/* <input type="checkbox" className='check' checked={props.tab.includes(item) ? true : false} /> */}
          <div className="detailadd">
            <span className='titreadd'> Online Service </span>
            <span className='txt'> Access to multiplayer games </span>
          </div>
          <span className='prixadd'> +${online}/{props.timeabo} </span>
        </div>

        <div className= "add larger" onClick={choixadd}>
          {/* <input type="checkbox" className='check' /> */}
          <div className="detailadd">
            <span className='titreadd'> Larger storage </span>
            <span className='txt'> Extra 1TB of cloud save </span>
          </div>
          <span className='prixadd'> +${larger}/{props.timeabo}  </span>
        </div>

        <div className="add custom" onClick={choixadd}>
          {/* <input type="checkbox" className='check' /> */}
          <div className="detailadd">
            <span className='titreadd'> Customizable Profile </span>
            <span className='txt'> Custom theme on your profile </span>
          </div>
          <span className='prixadd'> +${custom}/{props.timeabo}  </span>
        </div>

      </div>

      <div className="pass2">
        <button className='goback' onClick={()=> props.setLink(props.link - 1)}> Go Back </button>
        <button onClick={()=> props.setLink(props.link + 1)}> Next Step  </button>
      </div>

    </div>
  )
}

export default Step3