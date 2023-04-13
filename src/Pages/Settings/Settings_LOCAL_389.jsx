import { LogoDev } from "@mui/icons-material"
import "./settings.scss"
import { Link } from "react-router-dom"
import Dodge from "../../components/Assets/dodge.jpg"
import SideElement from "../../components/SideElement/SideElement"
import InputField from "../../components/InputField/InputField"

const Settings = ()=>{
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
            <Link to="#">Edit</Link>
            <Link to="#">Change password</Link>
            <Link to="#">Email from instagram</Link>
            <Link to="#">Adds</Link>
            <Link to="#">Help</Link>
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
          <div className="input-area">
          <form>
            <InputField placeholder= "Muhammed Musa" title="Name" desc="Help people discover your account by using the name you're known by: either your full name, nickname, or business name.
              You can only change your name twice within 14 days."/>
            <InputField placeholder= "Galapagous 01" title="Username" desc="In most cases, you'll be able to change your username back to galapagous01 for another 14 days."/>
            <InputField placeholder= "galapagous09@gmail.com" title="Email" desc=""/>
            <InputField placeholder= "81 232 803 94" title="Phone Number" desc=""/>
            <InputField placeholder= "Male" title="Gender" desc=""/>
            <button>Submit</button>
          </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
