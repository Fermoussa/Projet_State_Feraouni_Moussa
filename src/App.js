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
  const[mail, setMil] = useState("");
  const[phone, setPhone] = useState("");
  const[total, setTotal] = useState(0);


  // let page = link == 1 ? <Step1/> : <Step2/>
  let page;
  if(link == 1){
    page = <Step1 link={link} setLink={setLink} />;
  }else if(link == 2){
    page = <Step2 link={link} setLink={setLink} total={total} setTotal={setTotal} />;
  }else if(link == 3){
    page = <Step3 link={link} setLink={setLink}/>;
  }else{
    page = <Step4 link={link} setLink={setLink}/>
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
