import { Outlet } from "react-router-dom"
import Sidebar from "../Sidebar/SIdebar"
import RightBar from "../RightBar/RightBar"

const Layout = ()=>{
  return(
    <div className='main-container' style={{display: "flex", alignItems:"flex-start"}}>
      <div className='sidebar-container' style={{flex:"1" , height:"100vh", borderRight:"1px solid grey"}}>
      <Sidebar/>
      </div>
      <div className='outlet-container' style={{flex:"2", height:"100vh", overflow:"scroll"}}>
      <Outlet/>
      </div>
      <div className='rightbar-container' style={{flex:"1.3" , height:"100vh"}}>
      <RightBar/>
      </div>
    </div>
  )
}

export default Layout