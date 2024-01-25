import React from 'react';
import './Thank.css';
import merci from '../../assets/thankyou.svg'

function Thank() {
    return (
        <div className='page5'>
            <img src={merci} alt="" srcset="" /> 
            <h2> Thank You </h2>
            <div className="txt">
                <p>
                    Thanks for confirming your inscription! We hope you have  
                    fun using our plateform. If you ever need support, please
                    feel free to email us at support@loremgaming.com.
                </p>
            </div>
        </div>
    )
}

export default Thank