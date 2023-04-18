import SideElement from "../SideElement/SideElement"
import Musa1 from "../Assets/musa2.jpg"
import Xmass from "../Assets/bike2.jpg"
import "./post.scss"
import { Favorite, MapsUgc, MoreHorizRounded, BookmarkBorder, Send, Cancel, EmojiEmotions } from "@mui/icons-material"
import { useState } from "react"
import { Link } from "react-router-dom"
import InputField from "../InputField/InputField"
const Post = ()=>{
    const [moreOption, setMore] = useState(false)
    const [messageView, setMessageView] = useState(false)
    const handleShare = async()=>{
        try{
            await navigator.share({
                title:"My first post",
                text: "In his novel, Goerge orwel, said in order to protect ourself from the authoritarian, we must never abandone the truth",
                url:"https://example.com/my-post"
            })
        }catch(error){
            console.log({"Share Error": error.message})
        }
    }
    return(
        <div className="post-container">
            <div className="post-section">
            <div className="top-section">
                <Link to="/single/1">
                <SideElement title="ericsson" img={Musa1} mini="4d"/>
                </Link>
                <button onClick={()=>{setMore(true)}}>
                <MoreHorizRounded/>
                </button>
                {moreOption && <div className="more-element">
                    <ul>
                        <li><button onClick={()=>{alert("hello")}}>Report</button></li>
                        <li><button onClick={()=>{alert("hello")}}>Unfollow</button></li>
                        <li><button onClick={()=>{alert("hello")}}>Add to favorite</button></li>
                        <li><button onClick={()=>{alert("hello")}}>Go to post</button></li>
                        <li><button onClick={handleShare}>Share</button></li>
                        <li><button onClick={()=>{setMore(false)}}>cancel</button></li>
                    </ul>
                </div>}
            </div>
            <div className="middle-section">
                <img src={Xmass} alt="post item"/>
                <div className="post-reactions">
                    <div className="left-side">
                        <button onClick={()=>{alert("favorite selected")}}>
                            <Favorite/>
                        </button>
                        <button onClick={()=>{alert("comment selected")}}>
                            <MapsUgc/>
                        </button>
                    </div>
                    <div className="right-side">
                        <button onClick={()=>{alert("to be saved")}}>
                            <BookmarkBorder/>
                        </button>        
                    </div> 
                </div>
                <div className="post-info">
                <span>135 likes</span>
                <p>A man memory is like a map, it can capture the shadow of reality at a point in time, but it can't give you reality it self, if you live according to this, you will only live according to the man's memory, if you want the truth, there can be no intermediary.</p>
                </div>
            </div>
            {messageView && <div className ="comments">
                <div className="left">
                    <img src={Xmass} alt="post item"/>
                </div>
                <div className="right">
                    <div className="top">
                    <SideElement title="ericsson" img={Musa1} mini="my first post"/>
                    </div>
                    <div className="bottom">
                        <div className="left">
                        <SideElement img={Musa1} title="ericsson"/>
                        </div>
                            <div>
                            <h1>My first post</h1>
                            <p>Working hard is a myth, federich neitche once said, if society only reward effectiveness not hard work, so if apple spend 10yrs building a phone and it does not solve my problem, i wont pay a dime for it, but if they spend a day to build anotehr phone which work, i will pay them in full. So it important we work effectively not just hard.</p>
                            </div> 
                            <div className="comment-area">
                            {["hello", "nice", "good job", "wow", "good job", "wow"].map(each_comment=>{
                                return(
                                    <SideElement title="ericsson" img={Musa1} mini={each_comment}/>
                                )
                            })}
                        </div>
                        <InputField/>
                    </div>
                </div>
                <div className="cancel">
                    <button onClick={()=>{setMessageView(false)}}>
                    <Cancel/>
                    </button>
                    </div>
            </div>}
            <div className="bottom-section">
                <button onClick={()=>{setMessageView(true)}}>
                <span>View all 4 comment</span>
                </button>
                <InputField/>
            </div>
            <hr/>
            </div>
        </div>
    )
}

export default Post