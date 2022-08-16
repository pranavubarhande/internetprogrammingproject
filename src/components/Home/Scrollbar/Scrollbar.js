import React from 'react'
import img1 from './img1.webp'

function Scrollbar() {
  return (
    <div className="scmaindiv" style={{backgroundImage: `url(${img1})`, backgroundSize: 'cover', backgroundSize:'100% 100%', height: '500px', borderRadius: '10px', padding: '100px', color: 'white'}}>
      <div className="innertext">
        <h2 style={{margin: '10px 0px'}}>Grilled BBQ Burgers.Available Now.</h2>
        <h2 style={{margin: '10px 0px'}}>THE GOODNESS OF THE BEST</h2>
        <button style={{margin: '10px 0px', backgroundColor: 'red', borderRadius: '5px', padding: '5px'}}>Order Now</button>
        <h4 style={{margin: '10px 0px'}}>Get 20% off on BBQ Burgers, Use code BBQB</h4>
      </div>
      
        
    </div>
  )
}

export default Scrollbar