import React from 'react'
import "./reelsElement.scss"
import SideElement from "../SideElement/SideElement"
import Musa from "../Assets/food.jpg"
import { Comment, Favorite, MoreHoriz, Save, Send } from '@mui/icons-material'
import ItemCard from '../ItemCard/ItemCard'


function ReelElement(props) {
  return (
    <div className='relContainer'>
        <div className='each_rel'>
            <div className='video'>
                <video src={props.data} controls={true} autoPlay={true} />
                <SideElement img={Musa} title= {props.name}/>
            </div>
            <div className='reactions'>
                <ItemCard logo = {Favorite} title = {props.like}/>
                <ItemCard logo = {Comment} title = {props.comment}/>
                <ItemCard logo = {Send}/>
                <ItemCard logo = {Save}/>
                <ItemCard logo = {MoreHoriz}/>
            </div>
        </div>
    </div>
  )
}

export default ReelElement