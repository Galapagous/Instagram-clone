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
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import { useState } from "react"
import { ClearRounded } from "@mui/icons-material"
const Sidebar = ()=>{
    const [menuStatus, setMenuStatus] = useState(false)
    return(
        <div className="sidebar">
            <div className="top">
                <Link to = "/">
                <img src={Insta} alt="instagram logo"/>
                </Link>
            </div>
            <div className="middle">
            <Link to="/">
            <SideElement title = "Home" img = {Home}/>
            </Link>
            <button onClick={()=>{alert("hello")}}>
            <SideElement title = "Search" img = {Search}/>
            <div className="search">
                <div className="top">
                    <h3>Search</h3>
                    <input type="text" placeholder="search"/>
                    <ClearRounded/>
                </div>
                <hr/>
                <div className="bottom">
                    <span>resent</span>
                </div>
            </div>
            </button>
            <button>
            <SideElement title = "Explore" img = {Explore}/>
            </button>
            <button>
            <SideElement title = "Reel" img = {Reel}/>
            </button>
            <button>
            <SideElement title = "Send" img = {Send}/>
            </button>
            <button>
            <SideElement title = "Heart" img = {Heart}/>
            </button>
            <button>
            <SideElement title = "Create" img = {Create}/>
            </button>
            <Link to="/single/1">
            <SideElement title = "Profile" img = {Profile}/>
            </Link>
            </div>
            <div className="bottom">
                <button onClick = {()=>{setMenuStatus(!menuStatus)}}>
                <SideElement title = "Menu" img = {Menu}/>
                </button>
                    {menuStatus && <div className="menu-display">
                <SideElement title="Settings" img = {Settings}/>
                <SideElement title="Your activity" img = {Time}/>
                <SideElement title="Saved" img = {Bookmark}/>
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