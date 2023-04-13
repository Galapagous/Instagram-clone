import React from 'react'
import "./reels.scss"
import TestVid from "../../components/Assets/explore-vid.mp4"

function Reels() {
  return (
    <div className='reel-container'>
        {[1,2,3,4,5].map((each_data)=>{
          return (<div className='test'>
           <video src={TestVid} width="300" height="350" controls={true} autoPlay={true} />
          </div>)
        })}
    </div>
  )
}

export default Reels