
const InputField = (props)=>{
  return(
    <div className="input-container">
    <div className="input">
      <h3>{props.title}</h3>
      <input type="text" placeholder={props.placeholder || ""} />
    </div>
      <p>{props.desc}</p>
    </div>
  )
}

export default InputField