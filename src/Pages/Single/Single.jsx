import "./single.scss"
import { AccountCircle, Settings, Apps, Bookmark, PersonAddAlt } from "@mui/icons-material"
import SideElement from "../../components/SideElement/SideElement"
import ItemCard from "../../components/ItemCard/ItemCard"
import ProfilePost from "../../components/ProfilePost/ProfilePost"
const Single = ()=>{
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
                    <div className="item-status">
                    <ItemCard logo={Apps} title = "POST"/>
                    </div>
                    <div className="item-status">
                    <ItemCard logo={Bookmark} title = "POST"/>
                    </div>
                    <div className="item-status">
                    <ItemCard logo={PersonAddAlt} title = "POST"/>
                    </div>
                </div>
                <div className="bottom">
                    <div className="posts">
                        <ProfilePost/>
                    </div>
                    <div className="saved"></div>
                    <div className="tagged"></div>
                </div>
            </div>
        </div>
    )
}

export default Single