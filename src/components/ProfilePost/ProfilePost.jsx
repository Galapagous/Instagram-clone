import ProfileCard from "../ProfileCard/ProfileCard"
import "./profilePost.scss"

const ProfilePost = ()=>{
    return(
        <div className="profilePost-container">
            <ProfileCard/>
            <ProfileCard />
            <ProfileCard/>
            <ProfileCard/>
        </div>
    )
}

export default ProfilePost