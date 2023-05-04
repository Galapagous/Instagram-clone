import { LogoDev } from "@mui/icons-material"
import "./settings.scss"
import { Link } from "react-router-dom"
import { Person } from "@mui/icons-material"
import Dodge from "../../components/Assets/dodge.jpg"
import SideElement from "../../components/SideElement/SideElement"
import Edit from "../../components/Edit/Edit"
import { useEffect, useState } from "react"
import Password from "../../components/Password/Password"
import { API, Auth, graphqlOperation } from "aws-amplify"
import { updateUser } from "../../graphql/mutations"
import { usersByUserIdAndId } from "../../graphql/queries"

const Settings = ()=>{
  const [view, setView] = useState("edit")
  const [profile, setProfile] = useState("")
  const [user, setCurrUser] = useState({})

  // --------------------Handling Profile--------------------
  useEffect(()=>{
    const getUser = async ()=>{
      const AuthUser =await Auth.currentAuthenticatedUser()
      const savedUser = await API.graphql(graphqlOperation(usersByUserIdAndId, {userId: `${AuthUser.attributes.sub}`}))
      setCurrUser(savedUser.data.usersByUserIdAndId.items[0])
        }
        getUser()
  },[])
  const handleProfile = async(e)=>{
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    await API.graphql(graphqlOperation(updateUser, {avatar: imageUrl}))
    setProfile(imageUrl);
  }
  // --------------------Handling Profile--------------------

  return(
    <div className="settings-container">
      <div className="settings">
        <div className="left-settings">
          <div className="logo">
            <LogoDev/>
            <h3>Name</h3>
          </div>
          <h3>Some account settings are moving</h3>
          <h3>Soon, Accounts Center will be the primary place to manage your account info and settings.</h3>
          <hr/>
          <div className="bottom-links">
            <button onClick={()=>{setView("edit")}}>Edit</button>
            <button onClick={()=>{setView("password")}}>Change password</button>
            <button>Adds</button>
            <button>Help</button>
          </div>
          <hr/>
          <div className="bottom-element">
          <div className="top-area">
            <LogoDev/>
            <h3>{user.Name}</h3>
          </div>
          <div className="bottom">
            <Link to="#">Account Center</Link>
            <p>Control settings for connected experiences across Instagram, the Facebook app and Messenger, including story and post sharing and logging in.</p>
          </div>
          </div>
        </div>
        <div className="right-settings">
          <div className="profile-image">
            <label for = "profile"><img src={user.avatar || Person}/>click on the image to change your Profile</label>
            <input id="profile" type="file" onChange={handleProfile}/>
          </div>
          <div className="change">
            {view === "edit" && <Edit user = {user}/>}
            {view === "password" && <Password/>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
