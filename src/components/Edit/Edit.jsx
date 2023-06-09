import { useEffect, useRef, useState } from "react"
import "./edit.scss"
import { API, Auth, graphqlOperation } from "aws-amplify"
import { createUser, updateUser } from "../../graphql/mutations"
import { getUser, listUsers, usersByUserIdAndId } from "../../graphql/queries"
import { Navigate } from "react-router-dom"



const Edit = (props)=>{
    const [authUser, setAuthUser] = useState("")
    const [authUserID, setAuthUserID] = useState("")
    const [mainUser, setMainUser] = useState({})
    useEffect(()=>{
        const getUser = async ()=>{
            const AuthUser =await Auth.currentAuthenticatedUser()
            const savedUser = await API.graphql(graphqlOperation(usersByUserIdAndId, {userId: `${AuthUser.attributes.sub}`}))
            setMainUser(savedUser.data.usersByUserIdAndId.items[0])
            setAuthUser(AuthUser)
            setAuthUserID(AuthUser.attributes.sub)
            }
            getUser()
        },[])
    let initial = {
        Name: "",
        userId: `${authUserID}`,
        username: "",
        bio: "",
        website: "",
        gender: "",
        phone: ""
    }
    const [newUser, setNewUser] = useState([])
    const [formState, setFormState] = useState(initial)
    // -----------------fetch user information-------------------
    // --------------------setInput-------------------------
    const setInput = (key,value)=>{
        setFormState({...formState, [key]: value})
    }
    // --------------------create new user-------------------------
    const AddUser = async (e)=>{
        e.preventDefault()
        try {
          if (!(formState.Name || formState.gender)) return
          const user = { ...formState }
          setNewUser([...newUser, user])
          setFormState(initial)
        //   console.log(user)
          mainUser ? 
          await API.graphql(graphqlOperation(updateUser, {id: mainUser.id, input: user})) : 
          await API.graphql(graphqlOperation(createUser, {input: user}))
          mainUser ? console.log("successfully updated user") : console.log("successfully created user")
          return <Navigate to="/"/>
        } catch (err) {
          console.log('error creating user:', err)
        }
      }
    // --------------------setInput-------------------------
    return(<div className="edit-container">
    <form onSubmit={AddUser}>
    <div className="write">
    <label>Name</label>
        <input onChange={event=>setInput("Name", event.target.value)} value={formState.Name} placeholder={mainUser ? mainUser.Name : "FullName"} title="Name" desc="Help people discover your account by using the name you're known by: either your full name, nickname, or business name.
            You can only change your name twice within 14 days"/>
    </div>
    <div className="write">
    <label>Username</label>
        <input onChange={event=>setInput("username", event.target.value)} value={formState.username} placeholder={mainUser ? mainUser.username : "username"} title="Name" desc="Help people discover your account by using the name you're known by: either your full name, nickname, or business name.
            You can only change your name twice within 14 days"/>
    </div>
    <div className="write">
    <label>Bio</label>
        <textarea onChange={event=>setInput("bio", event.target.value)} value={formState.bio} placeholder={mainUser? mainUser.bio : "let people know about you"} title="bio"/>
    </div>
    <div className="write">
    <label>Website</label>
        <input onChange={event=>setInput("website", event.target.value)} value={formState.website} placeholder={mainUser ? mainUser.website : "website"} title="Website" desc="website"/>
    </div>
    <div className="write">
    <label>Phone</label>
        <input onChange={event=>setInput("phone", event.target.value)} value={formState.phone} placeholder={mainUser ? mainUser.phone : "Phone Number"} title="Phone" desc=""/>
    </div>
    <div className="write">
    <label>Gender</label>
        <input onChange={event=>setInput("gender", event.target.value)} value={formState.gender} placeholder={mainUser ? mainUser.gender : "Gender"} title="Gender" desc=""/>
    </div>
        <button>Submit</button>
    </form>
    </div>)
}

export default Edit