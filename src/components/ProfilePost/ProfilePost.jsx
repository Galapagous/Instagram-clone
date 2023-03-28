import ProfileCard from "../ProfileCard/ProfileCard"
import "./profilePost.scss"
import Post1 from "../Assets/bedroom.jpg"
import Post2 from "../Assets/couple.jpg"
import Post3 from "../Assets/musa2.jpg"
import Post4 from "../Assets/dodge.jpg"

const ProfilePost = ()=>{
    return(
        <div className="profilePost-container">
            <ProfileCard img={Post4} like = "3500" comment = "1500"/>
            <ProfileCard img={Post1} like = "3000" comment = "1000"/>
            <ProfileCard img={Post2} like = "2000" comment = "500"/>
            <ProfileCard img={Post3} like = "1000" comment = "250"/>
        </div>
    )
}

export default ProfilePost