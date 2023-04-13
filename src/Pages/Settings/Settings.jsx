import { LogoDev } from "@mui/icons-material"
import "./settings.scss"
import { Link } from "react-router-dom"
import Dodge from "../../components/Assets/dodge.jpg"
import SideElement from "../../components/SideElement/SideElement"
// import InputField from "../../components/InputField/InputField"
import Edit from "../../components/Edit/Edit"
import { useState } from "react"
import Password from "../../components/Password/Password"

const Settings = ()=>{
  const [view, setView] = useState("edit")
  return(
    <div className="settings-container">
      <div className="settings">
        <div className="left-settings">
          <div className="logo">
            <LogoDev/>
            <h3>Musa</h3>
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
            <h3>Musa</h3>
          </div>
          <div className="bottom">
            <Link to="#">Account Center</Link>
            <p>Control settings for connected experiences across Instagram, the Facebook app and Messenger, including story and post sharing and logging in.</p>
          </div>
          </div>
        </div>
        <div className="right-settings">
          <SideElement title = "Galapagous" mini = "change your profile picture" img={Dodge}/>
          <div className="change">
            {view === "edit" && <Edit/>}
            {view === "password" && <Password/>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
