import React, { useEffect, useState } from 'react';
import './Step3.css'

function Step3(props) {

  const[online,setOnline] = useState(1);
  const[larger,setLarger] = useState(2);
  const[custom,setCustom] = useState(2);


  const[test, setTest] = useState(0);

  const [isChecked, setIsChecked] = useState(false);

  function choixadd(e){
    setIsChecked(true);
    // console.log(e.currentTarget);

    let checkbox = document.getElementsByClassName("check")
    checkbox.checked = !checkbox.checked;

    let a = e.currentTarget.className

    if(isChecked == true){
      setIsChecked(false);
    }

    if(a.includes("add online")){
      // props.setTotal(props.total + online);
      props.setAdd(online);
      setTest(1);
    }

    else if(a.includes("add larger")){
      // props.setTotal(props.total + larger);
      props.setAdd(larger);
      setTest(2);
    }

    else if(a.includes("add custom")){
      // props.setTotal(props.total + custom);
      props.setAdd(custom);
      setTest(3);
    }

  }

  useEffect(()=>{
    // console.log(`le prix : ${online}`);
    // console.log(`Le total finale: ${props.total}`);
    console.log(props.add);
  },[props.add])

  return (
    <div className='page3'>

      <div className="titre">
        <h2> Pick add-ons </h2>
        <span> Add-ons help enhance your gaming experience. </span>
      </div>

      <div className="contentadd">

        <div className={`add online ${isChecked == true ? "actives" : null}`} onClick={choixadd}>
          <input type="checkbox" className='check' />
          <div className="detailadd">
            <span className='titreadd'> Online Service </span>
            <span className='txt'> Access to multiplayer games </span>
          </div>
          <span className='prixadd'> +${online}/mo </span>
        </div>

        <div className={`add online ${isChecked == true ? "actives" : null}`} onClick={choixadd}>
          <input type="checkbox" className='check' />
          <div className="detailadd">
            <span className='titreadd'> Larger storage </span>
            <span className='txt'> Extra 1TB of cloud save </span>
          </div>
          <span className='prixadd'> +${larger}/mo </span>
        </div>

        <div className={`add custom ${test == 3 ? "actives" : null}`} onClick={choixadd}>
          <input type="checkbox" className='check' />
          <div className="detailadd">
            <span className='titreadd'> Customizable Profile </span>
            <span className='txt'> Custom theme on your profile </span>
          </div>
          <span className='prixadd'> +${custom}/mo </span>
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