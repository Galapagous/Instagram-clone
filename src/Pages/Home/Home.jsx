import React from "react"
import SideElement from "../../components/SideElement/SideElement"
import "./home.scss"
import Musa1 from "../../components/Assets/musa1.jpg"
import Musa2 from "../../components/Assets/musa2.jpg"
import Post from "../../components/Post/Post"

const Home = (props)=>{
    return(
        <div className="container">
            <div className="status">
                <SideElement title="ericsson" img={Musa1}/>
                <SideElement title="ecmascript" img={Musa2}/>
                <SideElement title="ericsson" img={Musa1}/>
                <SideElement title="ecmascript" img={Musa2}/>
                <SideElement title="ericsson" img={Musa1}/>
                <SideElement title="ecmascript" img={Musa2}/>
                <SideElement title="ericsson" img={Musa1}/>
                <SideElement title="ecmascript" img={Musa2}/>
                <SideElement title="ericsson" img={Musa1}/>
                <SideElement title="ecmascript" img={Musa2}/>
            </div>
            {console.log(props.user)}
            <div className="post-section">
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default Home