import InputField from "../InputField/InputField"
const Edit = ()=>{
    return(<div className="edit-container">
        <form>
        <InputField placeholder="Muhammed Musa" title="Name" desc="Help people discover your account by using the name you're known by: either your full name, nickname, or business name.
            You can only change your name twice within 14 days"/>
        <InputField placeholder="" title="Website" desc="website"/>
        <InputField placeholder="Email" title="Email" desc=""/>
        <InputField placeholder="Phonenumber" title="Phone" desc=""/>
        <InputField placeholder="Gender" title="Gender" desc=""/>
        <button>Submit</button>
        </form>
    </div>)
}

export default Edit