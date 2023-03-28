import SideElement from "../SideElement/SideElement"
import Musa1 from "../Assets/musa2.jpg"
import Musa2 from "../Assets/musa2.jpg"
import Roy from "../Assets/royvita.png"
import Xmass from "../Assets/bike2.jpg"
import Bedroom from "../Assets/bedroom.jpg"
import Couple from "../Assets/couple.jpg"
import Bookmark from "../Assets/bookmark.png"
import Comment from "../Assets/comment.png"
import Send from "../Assets/send.png"
import Heart from "../Assets/heart.png"
import Smiley from "../Assets/smiley.png"
import "./post.scss"
import { MoreHorizRounded } from "@mui/icons-material"
const Post = ()=>{
    return(
        <div className="post-container">
            <div className="post-section">
            <div className="top-section">
                <SideElement title="ericsson" img={Musa1} mini="4d"/>
                <MoreHorizRounded/>
            </div>
            <div className="middle-section">
                <img src={Xmass} alt="post item"/>
                <div className="post-reactions">
                    <div className="left-side">
                    <img src={Heart} alt="heart"/>
                    <img src={Comment} alt="comment"/>
                    <img src={Send} alt="send"/>
                    </div>
                    <div className="right-side">
                        <img src={Bookmark} alt="bookmark"/>
                    </div> 
                </div>
                <div className="post-info">
                <span>135 likes</span>
                <p>In his novel, Goerge orwel, said in order to protect ourself from the authoritarian, we must never abandone the truth.</p>
                </div>
            </div>
            <div className="bottom-section">
                <span>View all 4 comment</span>
                <div className="add-comment">
                <input type="text" placeholder="Add a comment..."/>
                <img src={Smiley} alt="smiley"/>
                </div>
            </div>
            <hr/>
            </div>
        </div>
    )
}

export default Post