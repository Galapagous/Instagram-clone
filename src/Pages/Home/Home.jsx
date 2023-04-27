import React from "react"
import SideElement from "../../components/SideElement/SideElement"
import "./home.scss"
import Musa1 from "../../components/Assets/musa1.jpg"
import Musa2 from "../../components/Assets/musa2.jpg"
import Post from "../../components/Post/Post"
import { API, graphqlOperation, Amplify } from "aws-amplify"
import * as Queries from "../../graphql/queries"
import * as Mutations from "../../graphql/mutations"
import { useEffect } from "react"
import { Auth } from "aws-amplify"
import { Navigate, Redirect } from 'react-router-dom';
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Home = ()=>{
    const [redirect, setRedirect] = useState(null)
    useEffect(()=>{
        const getUser = async ()=>{
            const user =await Auth.currentAuthenticatedUser()
            console.log(user)
            if (!user.Name){
                setRedirect(`/single/edit/${user.username}`)
                toast.warn('This action may cause unexpected behavior!', {
                position: toast.POSITION.TOP_CENTER
                  })
            }
        }
        getUser()
    },[])

    if (redirect) {
        return <Navigate to={redirect} />;
      }

    return(
        <div className="container">
        <ToastContainer />
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
            <div className="post-section">
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default Home