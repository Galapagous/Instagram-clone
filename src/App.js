import "./app.scss"
import Home from './Pages/Home/Home';
import Single from './Pages/Single/Single';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
import Sidebar from './components/Sidebar/SIdebar';
import RightBar from "./components/RightBar/RightBar";
import Explore from "./Pages/Explore/Explore";
import Reels from "./Pages/Reels/Reels";
import Message from "./Pages/Message/Message";
import Settings from "./Pages/Settings/Settings"

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

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        }
      ]
    },
    {
      path: "/single/:id",
      element: <SingleLayout><Single/></SingleLayout>
    },
    {
      path: "/single/explore",
      element: <SingleLayout><Explore/></SingleLayout>
    },
    {
      path: "/single/reel",
      element: <SingleLayout><Reels/></SingleLayout>
    },
    {
      path: "/single/message/:id",
      element: <SingleLayout><Message/></SingleLayout>
    },
    {
      path: "/single/edit/:id",
      element: <SingleLayout><Settings/></SingleLayout>
    },
  ])
  return (
    <RouterProvider router = {router}/>
  );
}

export default App;
