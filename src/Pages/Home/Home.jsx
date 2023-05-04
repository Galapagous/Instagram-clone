import React from "react"
import SideElement from "../../components/SideElement/SideElement"
import "./home.scss"
import Musa1 from "../../components/Assets/musa1.jpg"
import Profile from "../../components/Assets/profile.png"
import Musa2 from "../../components/Assets/musa2.jpg"
import Post from "../../components/Post/Post"
import { API, graphqlOperation, Amplify, Auth } from "aws-amplify"
import { getUser, listUsers, usersByUserIdAndId } from "../../graphql/queries"
import * as Mutations from "../../graphql/mutations"
import { useEffect, useState } from "react"
import { Navigate, Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = ()=>{
    const [redirect, setRedirect] = useState("")
    const [user, setCurrUser] = useState({})
    const [auth, setAuthUser] = useState({})
    useEffect(()=>{
    const getUser = async ()=>{
      const AuthUser =await Auth.currentAuthenticatedUser()
      const savedUser = await API.graphql(graphqlOperation(usersByUserIdAndId, {userId: `${AuthUser.attributes.sub}`}))
      setCurrUser(savedUser.data.usersByUserIdAndId.items[0])
      setAuthUser(AuthUser)
        }
        getUser()
        !user && setRedirect(`/sigle/edit/${auth.attributes.sub}`)
    },[])

    if (redirect) {
        return <Navigate to={redirect} />;
      }

    return(

        <div className="container">
        <ToastContainer />
            <div className="status">
            {console.log(user)}
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
                <Post user = {user}/>
                <Post user = {user}/>
                <Post user = {user}/>
            </div>
        </div>
    )
}

export default Home