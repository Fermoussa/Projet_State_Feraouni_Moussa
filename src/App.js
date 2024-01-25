import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Step1 from './components/Step1/Step1';
import Step2 from './components/Step2/Step2';
import Step3 from './components/Step3/Step3';
import Step4 from './components/Step4/Step4';
import Thank from './components/Thank/Thank';

function App() {

  const[link, setLink] = useState(1);
  const[nom, setNom] = useState("");
  const[mail, setMail] = useState("");
  const[phone, setPhone] = useState("");
  const[total, setTotal] = useState(0);
  const[add, setAdd] = useState(0);

  const[planfinale, setPlanfinale] = useState("");
  const[periodefinale, setPeriodefinale] = useState("");
  const[prixfinale, setPrixfinale] = useState(0);
  const[timeabo, setTimeabo] = useState("");

  const[tab, setTab] = useState([]);
  const[totaladd, setTotaladd] = useState(0);

  const[fin, setFin] = useState(0);

  var btn1 = document.getElementById("btn1");
  var btn2 = document.getElementById("btn2");
  var btn3 = document.getElementById("btn3");
  var btn4 = document.getElementById("btn4");

  let page;
  if(link === 1){
    page = <Step1 link={link} setLink={setLink} nom={nom} setNom={setNom} mail={mail} setMail={setMail} phone={phone} setPhone={setPhone}  />;
  }else if(link === 2){
    // btn2 = document.getElementById("btn2"); 
    console.log(btn2);
    btn2.style.background = "lightblue";
    btn2.style.color = "darkblue";

    btn3.style.background = "transparent";
    btn3.style.color = "white";

    btn4.style.background = "transparent";
    btn4.style.color = "white";
    page = <Step2 link={link} setLink={setLink} total={total} setTotal={setTotal} planfinale={planfinale} setPlanfinale={setPlanfinale} periodefinale={periodefinale} setPeriodefinale={setPeriodefinale} prixfinale={prixfinale} setPrixfinale={setPrixfinale} timeabo={timeabo} setTimeabo={setTimeabo}  />;
  }else if(link === 3){
    btn3.style.background = "lightblue";
    btn3.style.color = "darkblue";
    btn2.style.background = "transparent";
    btn2.style.color = "white";
    btn4.style.background = "transparent";
    btn4.style.color = "white";
    page = <Step3 timeabo={timeabo} setTimeabo={setTimeabo} link={link} setLink={setLink} total={total} setTotal={setTotal} add={add} setAdd={setAdd} tab={tab} setTab={setTab} totaladd={totaladd} setTotaladd={setTotaladd} />;
  }else if(link === 4){
    btn2.style.background = "transparent";
    btn2.style.color = "white";

    btn3.style.background = "transparent";
    btn3.style.color = "white";

    btn4.style.background = "lightblue";
    btn4.style.color = "darkblue";


    page = <Step4  fin={fin} setFin={setFin} link={link} setLink={setLink} total={total} setTotal={setTotal} planfinale={planfinale} periodefinale={periodefinale} setPeriodefinale={setPeriodefinale} prixfinale={prixfinale} setPrixfinale={setPrixfinale} timeabo={timeabo} setTimeabo={setTimeabo} tab={tab} setTab={setTab} totaladd={totaladd} setTotaladd={setTotaladd} />
  }else{
    page = <Thank/>
  }



  
  return (
    <div className="App">
      <div className="content">
        <Sidebar link={link} setLink={setLink} />
        {page}
      </div>
    </div>
  );
}

export default App;
