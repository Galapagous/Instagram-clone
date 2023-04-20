import Sidebar from "../Sidebar/SIdebar"


const SingleLayout = ({ children }) => {
  return (
    <div className='single-container' style={{display: "flex", alignItems:"flex-start"}}>
      <div className='sidebar-container' style={{flex:"1" , height:"100vh", borderRight:"1px solid grey"}}>
        <Sidebar/>
      </div>
      <div className='outlet-container' style={{flex:"3", height:"100vh", overflow:"scroll"}}>
        {children}
      </div>
    </div>
  )
}

export default SingleLayout