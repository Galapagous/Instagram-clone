import { CollectionsRounded, Instagram } from "@mui/icons-material"
import "./create.scss"
import Logo from "../../components/Assets/insta.png"
import Background2 from "../../components/Assets/post-2.jpg"
import { useRef, useState } from "react"


 const Create = ()=>{
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const [postImage, setPostImage] = useState()

  const handleSubmit = (e)=>{
    e.preventDefault();
    const desc = descRef.current.value
    const title = titleRef.current.value
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setPostImage(imageUrl);
  };

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
        <div className="post-image">
          <div className="left">
            {postImage ? <img src={postImage} alt="upload"/> : <p>Your image will appear here</p>}
          </div>
          <div className="right">
          <label for="file-input"><CollectionsRounded/></label>
          <input style={{display: "none"}} id="file-input" type="file" onChange={handleImageChange}/>
          </div>
        </div>
        <button>Post</button>
      </form>
    </div>
  </div>
  )
}

export default Create