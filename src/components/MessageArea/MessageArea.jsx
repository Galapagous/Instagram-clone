import React from 'react'
import "./messageArea.scss"
import SideElement from '../SideElement/SideElement'
import Musa from "../Assets/musa2.jpg"
import { Call, EmojiEmotions, TagFaces, VideoCall } from '@mui/icons-material'


function MessageArea() {
  return (
    <div className='chat-container'>
        <div className='top'>
            <SideElement title = "muhammed musa" img = {Musa}/>
            <div className='interact'>
                <Call/>
                <VideoCall/>
            </div>
        </div>
        <div className='middle'>
            <div className='items'>
                <img src={Musa} alt='profile'/>
                <p>Hello boss</p>
            </div>
            <div className='items owner'>
                <img src={Musa} alt='profile'/>
                <p>hi what can i do for you</p>
            </div>
            <div className='items'>
                <img src={Musa} alt='profile'/>
                <p>I once heard jordan peterson say, the world is full of suffering that cannot be overlook. There are distractions who act as an antidote to those suffering,
                    the solution is to find something worth doing that to suffer becomes justified.
                </p>
            </div>
            <div className='items owner'>
                <img src={Musa} alt='profile'/>
                <p>Wow, thats powerfull, well, my greatest quote was from chukwemerije, when he said, education, particalarly when is qualitative and broadbase, it help to moderate, social tension, this is the
                    tension between the rich and the poor, but by giving the poor thesame education as the rich, you dont just help them to change their social economic circumstance,
                    it help them to moderate how they express grieviance over those social economic circumstance
                </p>
            </div>
        </div>
        <div className='bottom-chat'>
        <input type='text'/>
        <TagFaces style={{width: "20px", height: "20px", cursor: "pointer"}}/>
        </div>
    </div>
  )
}

export default MessageArea