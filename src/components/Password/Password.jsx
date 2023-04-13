import InputField from "../InputField/InputField"
import "./password.scss"
const Password = ()=>{
    return(<div className="password-container">
        <form>
        <InputField placeholder="Old password" title="Old Password" desc=""/>
        <InputField placeholder="New password" title="New Password" desc=""/>
        <button>Submit</button>
        </form>
    </div>)
}

export default Password