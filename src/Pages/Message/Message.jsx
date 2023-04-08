import { ArrowDownward, EditOutlined, KeyboardArrowDown, SendOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import "./message.scss"
import SideElement from '../../components/SideElement/SideElement'
import Profile from "../../components/Assets/profile.png"
import MessageArea from '../../components/MessageArea/MessageArea'


function Message() {
  const [disMessage, setDisMessage] = useState(false)
  const handleMessage = ()=>{
    setDisMessage(true)
  }
  return (
    <div className='message-container'>
        <div className='message'>
        <div className='left'>
        <div className='top'>
          <div className='inner'><h3>galapagous</h3><KeyboardArrowDown/></div>
          <EditOutlined/>
        </div>
        <div className='bottom'>
          <button onClick={handleMessage}>
          <SideElement title = "1galapagous" img = {Profile} mini = "hello boss"/>
          </button>
        </div>
        </div>
        <div className='right'>
          {disMessage ? <MessageArea/> : 
          <div className="no_friends">
            <SendOutlined/>
          <h3>Your Messages</h3>
          <p>Send private photo and message to friends or group </p>
          <button>Send Message</button>
          </div>}
        </div>
        </div>
    </div>
  )
}

export default Message