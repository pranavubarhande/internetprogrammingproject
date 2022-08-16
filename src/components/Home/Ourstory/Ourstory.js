import React from 'react'
import './Ourstory.css'
import burgereater from './burgeater.jpg'
function Ourstory() {
  return (
    <div className="maindiv">
        <h1 className="head">OUR STORY</h1>
        
        <div className="para"><img className="mainimg" src={burgereater} alt="" />Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Nunc id cursus metus aliquam eleifend mi in nulla. Donec et odio pellentesque diam. Est sit amet facilisis magna. Diam donec adipiscing tristique risus nec feugiat in. Nec ultrices dui sapien eget. Aliquet sagittis id consectetur purus ut faucibus pulvinar. Leo urna molestie at elementum eu facilisis sed odio morbi. Mauris vitae ultricies leo integer.</div>
        <button className="mainbutton">Read More</button>
    </div>
  )
}

export default Ourstory