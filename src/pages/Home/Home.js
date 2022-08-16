import React from 'react'
import Header from '../../components/Home/Header/Header'
import Scrollbar from '../../components/Home/Scrollbar/Scrollbar'
import Newflavors from '../../components/Home/Newflavors/Newflavors'
import './Home.css'
import Ourstory from '../../components/Home/Ourstory/Ourstory'
import Getconnected from '../../components/Home/Getconnected/Getconnected'
import Bottom from '../../components/Home/Bottom/Bottom'

function Home() {
  return (
    <div >
      <div><Header></Header></div>
      <div><Scrollbar></Scrollbar></div>
      <div><Newflavors></Newflavors></div>
      <div><Ourstory></Ourstory></div>
      <div><Getconnected></Getconnected></div>
      <div><Bottom></Bottom></div>
    </div>
  )
}

export default Home