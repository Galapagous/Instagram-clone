import React from 'react'
import "./explore.scss"
import ItemCard from '../../components/ItemCard/ItemCard'
import { ArrowLeft, ArrowRight, BrowseGalleryRounded, Comment, Favorite, VideoFile } from '@mui/icons-material'
import ExploreData from '../../components/Data/exploreData'

function Explore() {
  return (
    <div div className='explore-container'>
      {ExploreData.map(each_data=>{
        return(<div key={each_data.id} className='explore-item'>
            {((each_data.type === "image" && <img src={each_data.data} alt='post view'/>) || (each_data.type === "video" && <video src={each_data.data} width="300" height="350" controls={true} autoplay={true} />) || (each_data.type === "combineImage" && <img src={each_data.data[2]} alt='post view'/>))}
              <div className='logo'>
                {each_data.type === "combineImage" && <BrowseGalleryRounded/>}
                {each_data.type === "video" && <VideoFile/>}
              </div>
              {each_data.type === "combineImage" && <div className='navigator'>
                <button id='left'><ArrowLeft /></button>
                <button className='right' ><ArrowRight/></button>
              </div>}
            <div className='feel'>
            <ItemCard logo = {Favorite} title={each_data.likes}/>
            <ItemCard logo = {Comment} title={each_data.comments}/>
            </div>
          </div>)
      })}
    </div>
  )
}

export default Explore