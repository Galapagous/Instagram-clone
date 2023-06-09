import "./sidebar.scss"
import SideElement from "../SideElement/SideElement"
import Create from "../Assets/create.png"
import Explore from "../Assets/explore.png"
import Heart from "../Assets/heart.png"
import Home from "../Assets/home2.png"
import Insta from "../Assets/insta.png"
import Menu from "../Assets/menu.png"
import Profile from "../Assets/profile.png"
import Reel from "../Assets/reel.png"
import Search from "../Assets/search.png"
import Settings from "../Assets/settings.png"
import Time from "../Assets/time.png"
import Moon from "../Assets/moon.png"
import Bookmark from "../Assets/bookmark.png"
import Important from "../Assets/important.png"
import Send from "../Assets/send.png"
import { Link } from "react-router-dom"
import { useState } from "react"
import { ClearRounded, CollectionsRounded, FavoriteBorder } from "@mui/icons-material"
import { useEffect } from "react"
const Sidebar = ({user, auth})=>{
    const [menuStatus, setMenuStatus] = useState(false)
    const [searchBox, setSearchBox] = useState(false)
    const [notifyBox, setNotifyBox] = useState(false)
    const [createPost, setCreatePost] = useState(false)
    // const [currUser, setCurrUser] = useState({})
    const handleDefault = ()=>{
        notifyBox && setNotifyBox(false)
        searchBox && setSearchBox(false)
        menuStatus && setMenuStatus(false)
    }
    return(
        <div className="sidebar" onClick={handleDefault}>
            <div className="top">
                <Link to = "/">
                <img src={Insta} alt="instagram logo"/>
                </Link>
            </div>
            <div className="middle">
            <Link to="/">
            <SideElement title = "Home" img = {Home}/>
            </Link>
            <button onClick={()=>{setSearchBox(!searchBox)}}>
            <SideElement title = "Search" img = {Search}/>
            </button>
            {searchBox && <div className="search">
                <div className="top">
                    <h3>Search</h3>
                    <input type="text" placeholder="search"/>
                    <ClearRounded/>
                </div>
                <hr/>
                <div className="bottom">
                    <span>Resent</span>
                </div>
            </div>}
            <Link to="/single/explore">
            <SideElement title = "Explore" img = {Explore}/>
            </Link>    
            <Link to="/single/reel">
            <SideElement title = "Reel" img = {Reel}/>
            </Link>
            <Link to="/single/message/1">
            <SideElement title = "Messages" img = {Send}/>
            </Link>
            <button onClick={()=>{setNotifyBox(!notifyBox)}}>
            <SideElement title = "Notifications" img = {Heart}/>
            </button>
            {notifyBox && <div className="notify">
                <div className="top">
                    <h3>Notifications</h3>
                    <div className="svg-cover">
                    <FavoriteBorder/>
                    </div>
                    <span>Activities on your Posts</span>
                    <span>When someone likes or comment on one of your post, you'll see it here</span>
                </div>
                <div className="bottom">
                    <span>Suggestions for you</span>
                    
                </div>
            </div>}
                <Link to="/single/create/7">
                    <SideElement title = "Create" img = {Create}/>
                </Link>
            <Link to="/single/1">
            <SideElement title = "Profile" img = {Profile}/>
            </Link>
            </div>
            <div className="bottom">
                <button onClick = {()=>{setMenuStatus(!menuStatus)}}>
                <SideElement title = "Menu" img = {Menu}/>
                </button>
                    {menuStatus && <div className="menu-display">
                    <Link to="/single/edit/2">
                <SideElement title="Settings" img = {Settings}/>
                    </Link>
                <SideElement title="Your activity" img = {Time}/>
                <Link to="/single/1"><SideElement title="Saved" img = {Bookmark}/></Link>
                <SideElement title="Switch appearance" img = {Moon}/>
                <SideElement title="Report a problem" img = {Important}/>
                <SideElement title="Switch account"/>
                <SideElement title="Log out"/>
            </div>}
            </div>
        </div>
    )
}

export default Sidebar