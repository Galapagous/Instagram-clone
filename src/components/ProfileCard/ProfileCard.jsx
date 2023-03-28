import "./profileCard.scss"
import React from 'react'
import { Favorite, ModeCommentRounded } from "@mui/icons-material"

function ProfileCard(props) {
  return (
    <div className="profileCard">
        <img src={props.img} alt="bedroom"/>
        <div className="post-reaction">
            <div className="like">
            <Favorite/>
            <span>{props.like}</span>
            </div>
            <div className="comment">
            <ModeCommentRounded/>
            <span>{props.comment}</span>
            </div>
        </div>
    </div>
  )
}

export default ProfileCard