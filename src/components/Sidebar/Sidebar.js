import React from 'react';
import './Sidebar.css';

function Sidebar(props) {
    
  return (
    <div className='side'>
        <div className="lien">
            <div><button id='btn1' onClick={()=> props.setLink(1)}> 1 </button></div>
            <div className='txtlien'>
                <span> Step 1</span>
                <span> YOUR INFO </span>
            </div>
        </div>

        <div className="lien">
            <div><button id='btn2' onClick={()=> props.setLink(2)}> 2 </button></div>
            <div className='txtlien'>
                <span> Step 2</span>
                <span> SELECT PLAN </span>
            </div>
        </div>

        <div className="lien">
            <div><button id='btn3' onClick={()=> props.setLink(3)}> 3 </button></div>
            <div className='txtlien'>
                <span> Step 3</span>
                <span> ADD-ONS </span>
            </div>
        </div>

        <div className="lien">
            <div><button id='btn4' onClick={()=> props.setLink(4)}> 4 </button></div>
            <div className='txtlien'>
                <span> Step 4</span>
                <span> SUMMARY </span>
            </div>
        </div>
    </div>
  )
}

export default Sidebar