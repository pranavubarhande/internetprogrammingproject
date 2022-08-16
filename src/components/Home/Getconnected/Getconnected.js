import React from 'react'
import './Getconnected.css'

function Getconnected() {
  return (
    <div className="maindivgetc">
      <h1>GET CONNECTED</h1>
      <p>Want to send us suggestions for new recipes? Tell us which of our burger is your favourite? Or just say hi? Get in touch!</p>
      <div className="divforform">
        <form className="mainform" action="">
          <label>Name</label>
          <input type="text" />
          <label>Email</label>
          <input type="text" />
          <label>Message</label>
          <input type="text" />
        </form>
      </div>
    </div>
  )
}

export default Getconnected