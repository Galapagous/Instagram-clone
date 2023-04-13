
const InputField = (props)=>{
  return(
    <div className="input-container">
    <div className="input">
      <input type="text" placeholder={props.placeholder || ""} />
      <h3>{props.title}</h3>
    </div>
      <p>{props.desc}</p>
    </div>
  )
}

export default InputField