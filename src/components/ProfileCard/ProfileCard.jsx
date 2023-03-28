import "./profileCard.scss"
import Post1 from "../Assets/bedroom.jpg"
import React from 'react'
import { Favorite, ModeCommentRounded } from "@mui/icons-material"

function ProfileCard() {
  return (
    <div className="profileCard">
        <img src={Post1} alt="bedroom"/>
        <div className="post-reaction">
            <div className="like">
            <Favorite/>
            <span>2000</span>
            </div>
            <div className="comment">
            <ModeCommentRounded/>
            <span>500</span>
            </div>
        </div>
    </div>
  )
}

export default ProfileCard