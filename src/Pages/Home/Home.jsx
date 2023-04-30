import React from "react"
import SideElement from "../../components/SideElement/SideElement"
import "./home.scss"
import Musa1 from "../../components/Assets/musa1.jpg"
import Profile from "../../components/Assets/profile.png"
import Musa2 from "../../components/Assets/musa2.jpg"
import Post from "../../components/Post/Post"
import { API, graphqlOperation, Amplify } from "aws-amplify"
import { getUser, listUsers, usersByUserIdAndId } from "../../graphql/queries"
import * as Mutations from "../../graphql/mutations"
import { useEffect, useState } from "react"
import { Navigate, Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = ({user, auth})=>{
    const [redirect, setRedirect] = useState("")
    const [currUser, setCurrUser] = useState([])
    useEffect(()=>{
        !user.Name ? setRedirect(`/single/edit/${user.attributes.sub}`) : setCurrUser(user)
    },[])

    if (redirect) {
        return <Navigate to={redirect} />;
      }

    return(
        <div className="container">
        <ToastContainer />
            <div className="status">
            {console.log(currUser)}
                <SideElement title="ericsson" img={Musa2}/>
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
            <div className="post-section">
                <Post user = {user} auth = {auth}/>
                <Post user = {user} auth = {auth}/>
                <Post user = {user} auth = {auth}/>
            </div>
        </div>
    )
}

export default Home