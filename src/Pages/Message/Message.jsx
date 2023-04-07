import { ArrowDownward, EditOutlined, KeyboardArrowDown, SendOutlined } from '@mui/icons-material'
import React from 'react'
import "./message.scss"

function Message() {
  return (
    <div className='message-container'>
        <div className='message'>
        <div className='left'>
        <div className='top'>
          <div className='inner'><h3>galapagous</h3><KeyboardArrowDown/></div>
          <EditOutlined/>
        </div>
        <div className='bottom'>
          <h3>This will display friendlist</h3>
        </div>
        </div>
        <div className='right'>
          <SendOutlined/>
          <h3>Your Messages</h3>
          <p>Send private photo and message to friends or group </p>
          <button>Send Message</button>
        </div>
        </div>
    </div>
  )
}

export default Message