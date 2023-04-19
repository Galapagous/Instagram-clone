import InputField from "../InputField/InputField"
import "./password.scss"
const Password = ()=>{
    return(<div className="password-container">
        <form>
        <InputField placeholder="Old password" title="Old Password" desc="" type = "password"/>
        <InputField placeholder="New password" title="New Password" desc="" type = "password"/>
        <button>Submit</button>
        </form>
    </div>)
}

export default Password