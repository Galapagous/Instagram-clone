import SideElement from "../SideElement/SideElement"
import "./rightbar.scss"
import Profile from "../Assets/profile.png"
const RightBar = ({user, auth})=>{
    return(
        <div className="rightbar">
            <div className="top">
                <SideElement title = "Galapagous" img={user.avatar || Profile} mini = {user.Name}/>
                <span>Switch</span>
            </div>
            <div className="section-break">
                <span>Suggestions for you</span>
                <span>See All</span>
            </div>
            <div className="middle">
                <div className="middle-card">
                <SideElement title = "Galapagous" img={Profile} mini = "followed by ecmascript"/>
                <span>Follow</span>
                </div>
                <div className="middle-card">
                <SideElement title = "Galapagous" img={Profile} mini = "followed by ericsson"/>
                <span>Follow</span>
                </div>
                <div className="middle-card">
                <SideElement title = "Galapagous" img={Profile} mini = "followed by ericsson"/>
                <span>Follow</span>
                </div>
                <div className="middle-card">
                <SideElement title = "Galapagous" img={Profile} mini = "followed by ericsson"/>
                <span>Follow</span>
                </div>
                <div className="middle-card">
                <SideElement title = "Galapagous" img={Profile} mini = "followed by waqas"/>
                <span>Follow</span>
                </div>
            </div>
            <div className="bottom">
                <div className="top-foot">
                    <ul>
                        <li>About</li>
                        <li>Press</li>
                        <li>Help</li>
                        <li>API</li>
                        <li>Jobs</li>
                        <li>Privacy</li>
                        <li>Term</li>
                        <li>Location</li>
                        <li>Language</li>
                        <li>{user.Name}</li>
                    </ul>
                </div>
                <div className="bottom-foot">
                    <h4>
                    &copy; ISTAGRAM FROM MUHAMMED MUSA
                    </h4>
                </div>
            </div>
        </div>
    )
}

export default RightBar
