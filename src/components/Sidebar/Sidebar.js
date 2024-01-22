import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className='side'>
        <div className="lien">
            <div><button> 1 </button></div>
            <div className='txtlien'>
                <span> Step 1</span>
                <span> YOUR INFO </span>
            </div>
        </div>

        <div className="lien">
            <div><button> 2 </button></div>
            <div className='txtlien'>
                <span> Step 2</span>
                <span> SELECT PLAN </span>
            </div>
        </div>

        <div className="lien">
            <div><button> 3 </button></div>
            <div className='txtlien'>
                <span> Step 3</span>
                <span> ADD-ONS </span>
            </div>
        </div>

        <div className="lien">
            <div><button> 4 </button></div>
            <div className='txtlien'>
                <span> Step 4</span>
                <span> SUMMARY </span>
            </div>
        </div>
    </div>
  )
}

export default Sidebar