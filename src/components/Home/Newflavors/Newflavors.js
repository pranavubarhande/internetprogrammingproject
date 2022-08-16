import React from 'react'
import burg from './burg.png'
import img4 from './img4.png'
import img2 from './img2.png'
import img3 from './img3.png'
import img1 from './img1.png'

import './Newflavors.css'

function Newflavors() {
  return (
    <div className="mainframe">
        <h1 className="heading">NEW MORE FLAVORS</h1>
        <img className='imgmain' src={burg} alt="" />
        <div className="combineburger">
            <div className="showburg">
                <img className='subimages' src={img1} alt="" />
                <h1>ELK BURGER</h1>
                <h1>$210,00</h1>
                <button className='btnsub'>Order Now</button>
            </div>
            <div className="showburg">
                <img className='subimages' src={img2} alt="" />
                <h1>Salmon Sandwich</h1>
                <h1>$100,00</h1>
                <button className='btnsub'>Order Now</button>
            </div>
            <div className="showburg">
                <img className='subimages' src={img3} alt="" />
                <h1>Butter Burger</h1>
                <h1>$170,00</h1>
                <button className='btnsub'>Order Now</button>
            </div>
            <div className="showburg">
                <img className='subimages' src={img4} alt="" />
                <h1>Bison Burger</h1>
                <h1>$210,00</h1>
                <button className='btnsub'>Order Now</button>
            </div>

        </div>
        

    </div>
  )
}

export default Newflavors