import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Step1 from './components/Step1/Step1';
import Step2 from './components/Step2/Step2';
import Step3 from './components/Step3/Step3';
import Step4 from './components/Step4/Step4';

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
  const[timeabo, setTimeabo] = useState("mouss");

  const[tab, setTab] = useState([]);
  const[totaladd, setTotaladd] = useState(0);



  // let page = link == 1 ? <Step1/> : <Step2/>
  let page;
  if(link == 1){
    page = <Step1 link={link} setLink={setLink} nom={nom} setNom={setNom} mail={mail} setMail={setMail} phone={phone} setPhone={setPhone}  />;
  }else if(link == 2){
    page = <Step2 link={link} setLink={setLink} total={total} setTotal={setTotal} planfinale={planfinale} setPlanfinale={setPlanfinale} periodefinale={periodefinale} setPeriodefinale={setPeriodefinale} prixfinale={prixfinale} setPrixfinale={setPrixfinale} timeabo={timeabo} setTimeabo={setTimeabo}  />;
  }else if(link == 3){
    page = <Step3 link={link} setLink={setLink} total={total} setTotal={setTotal} add={add} setAdd={setAdd} tab={tab} setTab={setTab} totaladd={totaladd} setTotaladd={setTotaladd} />;
  }else{
    page = <Step4 link={link} setLink={setLink} total={total} setTotal={setTotal} planfinale={planfinale} periodefinale={periodefinale} setPeriodefinale={setPeriodefinale} prixfinale={prixfinale} setPrixfinale={setPrixfinale} timeabo={timeabo} setTimeabo={setTimeabo} tab={tab} setTab={setTab} totaladd={totaladd} setTotaladd={setTotaladd} />
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
