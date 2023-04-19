import React from 'react'
import ReelElement from '../../components/Reels_Element/ReelElement'
import reelData from "../../components/Data/reelData"


function Reels() {
  return (
    <div>
      {reelData.map((each_data, index)=>{
        return(
          <ReelElement key = {index} data = {each_data.data} name = {each_data.username} like = {each_data.likes} comment = {each_data.comments}/>
        )
      })}
    </div>
  )
}

export default Reels