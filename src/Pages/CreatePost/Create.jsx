import { CollectionsRounded } from "@mui/icons-material"
import "./create.scss"
import Background from "../../components/Assets/post-1.jpg"
import Background2 from "../../components/Assets/post-2.jpg"
import { useRef } from "react"
import { Picker } from "emoji-mart"


 const Create = ()=>{
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const imageRef = useRef(null)

  const handleSubmit = (e)=>{
    e.preventDefault();
    alert("hello")
  }
  return(
  <div className="create-container">
    <div className="create">
      <div className="post-logo">
        <h1>Create a new post</h1>
        <img src={Background2} alt="post background"/>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" ref={titleRef}/>
        <textarea placeholder="description" ref={descRef}></textarea>
        <label for="file-input"><CollectionsRounded/></label>
        <input style={{display: "none"}} id="file-input" type="file" ref={imageRef}/>
        <button>Post</button>
      </form>
    </div>
  </div>
  )
}

export default Create