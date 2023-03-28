import "./sideelement.scss"
const SideElement = (props)=>{
    return(
        <div className="element-container">
            <div className="text-area">
            <h2>{props.title}</h2>
            {props.mini && <span>{props.mini}</span>}
            </div>
            <div className="image-wrapper">
            {props.img && <img src={props.img} alt="element logo"/>}
            </div>
        </div>
    )
}

export default SideElement