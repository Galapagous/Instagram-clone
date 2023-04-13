import "./single.scss"
import { AccountCircle, Settings, Apps, Bookmark, PersonAddAlt, MoreHorizRounded } from "@mui/icons-material"
import ItemCard from "../../components/ItemCard/ItemCard"
import ProfileCard from "../../components/ProfileCard/ProfileCard"
import Post1 from "../../components/Assets/bedroom.jpg"
import Post2 from "../../components/Assets/couple.jpg"
import Post3 from "../../components/Assets/musa2.jpg"
import Post4 from "../../components/Assets/dodge.jpg"
import Post5 from "../../components/Assets/home.jpg"
import Post6 from "../../components/Assets/food.jpg"
import Post7 from "../../components/Assets/food22.jpg"
import { useState } from "react"
const Single = ()=>{
    const [view, setView] = useState("Post")
    return(
        <div className="container">
            <div className="top-area">
                <div className="left-side">
                    <AccountCircle/>
                </div>
                <div className="right-side">
                    <div className="level-one">
                        <h3>Galapagous01</h3>
                        <button>Edit profile</button>
                        <Settings/>
                        <MoreHorizRounded/>
                    </div>
                    <div className="level-two">
                        <span>0 posts</span>
                        <span>0 followers</span>
                        <span>0 following</span>
                    </div>
                    <div className="level-three">
                        <h2>Muhammed Musa</h2>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="bottom-area">
                <div className="top">
                    <div className="item-status" onClick={()=>{setView("Post")}}>
                    <ItemCard logo={Apps} title = "POST"/>
                    </div>
                    <div className="item-status" onClick={()=>{setView("Saved")}}>
                    <ItemCard logo={Bookmark} title = "SAVED"/>
                    </div>
                    <div className="item-status" onClick={()=>{setView("Tagged")}}>
                    <ItemCard logo={PersonAddAlt} title = "TAGGED"/>
                    </div>
                </div>
                <div className="bottom">
                {view === "Post" && <div className="my-post">
                    <div className="posts">
                        <ProfileCard img={Post4} like = "3500" comment = "1500"/>
                        <ProfileCard img={Post1} like = "3000" comment = "1000"/>
                        <ProfileCard img={Post2} like = "2000" comment = "500"/>
                        <ProfileCard img={Post3} like = "1000" comment = "250"/>
                    </div>
                </div>}
                {view === "Saved" && <div className="saved-post">
                    <div className="saved">
                        <ProfileCard img={Post4} like = "3500" comment = "1500"/>
                        <ProfileCard img={Post5} like = "3000" comment = "1000"/>
                        <ProfileCard img={Post2} like = "2000" comment = "500"/>
                        <ProfileCard img={Post6} like = "1000" comment = "250"/>
                    </div>
                </div>}
                {view === "Tagged" && <div className="tagged-post">
                    <div className="tagged">
                        <ProfileCard img={Post4} like = "3500" comment = "1500"/>
                        <ProfileCard img={Post5} like = "3000" comment = "1000"/>
                        <ProfileCard img={Post2} like = "2000" comment = "500"/>
                        <ProfileCard img={Post7} like = "1000" comment = "250"/>
                    </div>
                </div>}
                </div>
            </div>
        </div>
    )
}

export default Single