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
import { Link } from "react-router-dom"
import { API, Auth, graphqlOperation } from "aws-amplify"
import { usersByUserIdAndId } from "../../graphql/queries"
import { useEffect } from "react"


const Single = ()=>{
    const [user, setCurrUser] = useState({})
    const [auth, setAuthUser] = useState({})
    const [view, setView] = useState("Post")
    useEffect(()=>{
    const getUser = async ()=>{
      const AuthUser =await Auth.currentAuthenticatedUser()
      const savedUser = await API.graphql(graphqlOperation(usersByUserIdAndId, {userId: `${AuthUser.attributes.sub}`}))
      setCurrUser(savedUser.data.usersByUserIdAndId.items[0])
      setAuthUser(AuthUser)
        }
        getUser()
    },[])
    return(
        <div className="container">
            <div className="top-area">
                <div className="left-side">
                    <AccountCircle/>
                </div>
                <div className="right-side">
                    <div className="level-one">
                        <h3>{user.username}</h3>
                        <button>Edit profile</button>
                        <Link to="/single/edit/3"><Settings user = {user}/></Link> 
                        <MoreHorizRounded/>
                    </div>
                    <div className="level-two">
                        <span>0 post</span>
                        <span>0 followers</span>
                        <span>0 following</span>
                    </div>
                    <div className="level-three">
                        <h2>{user.Name}</h2>
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
                    {(!user.post === null)  ?
                    user.post.map((eachPost=>{
                        return(
                        <ProfileCard img={Post4} like = {eachPost.likes.length} comment ={eachPost.comment.length}/>
                        )
                    })) : <h1>No post yet</h1>}
                    </div>
                </div>}
                {view === "Saved" && <div className="saved-post">
                    <div className="saved">
                    {(!user.savedPost === null)  ?
                    user.post.map((eachPost=>{
                        return(
                        <ProfileCard img={Post4} like = {eachPost.likes.length} comment ={eachPost.comment.length}/>
                        )
                    })) : <h1>No savedPost yet</h1>}
                    </div>
                </div>}
                {view === "Tagged" && <div className="tagged-post">
                    <div className="tagged">
                    {(!user.taggedPost === null) ? user.taggedPost.map((eachPost=>{
                            return(
                                <ProfileCard img={Post4} like = {eachPost.likes.length} comment = {eachPost.comment.length}/>
                            )
                        })) : <h1>No tagged Post</h1>}
                    </div>
                </div>}
                </div>
            </div>
        </div>
    )
}

export default Single