import React, { useState } from 'react'
import "./swipeImage.scss"
import { ArrowLeft, ArrowRight } from '@mui/icons-material'

function SwipeImage(props) {
    const [currVal, setCurrVal] = useState(0)
    const increaseImg = (e)=>{
        currVal < (e.length - 1) ? setCurrVal(currVal + 1) : setCurrVal(0)
    }
    const decreaseImg = (e)=>{
        currVal > 0 ? setCurrVal(currVal - 1) : setCurrVal(e.length - 1)
    }
  return (
    <div>
        <img src={props.info[currVal]} alt='post view'/>
        <div className='navigator'>
            <button className ='left' onClick={increaseImg(props.info)}><ArrowLeft /></button>
            <button className='right' onClick={decreaseImg(props.info)}><ArrowRight/></button>
              </div>
    </div>
  )
}

export default SwipeImage