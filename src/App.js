import "./app.scss"
import Home from './Pages/Home/Home';
import Single from './Pages/Single/Single';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Explore from "./Pages/Explore/Explore";
import Reels from "./Pages/Reels/Reels";
import Message from "./Pages/Message/Message";
import Settings from "./Pages/Settings/Settings"
import Create from "./Pages/CreatePost/Create";
import SingleLayout from "./components/Layout/SingleLayout";
import Layout from "./components/Layout/Layout";
// -------------------------AWS Imports--------------------------
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
Amplify.configure(awsExports);
// -------------------------AWS Imports--------------------------


function App({ signOut, user }) {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element:<Home user = {user}/>
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
    {
      path: "/single/create/:id",
      element: <SingleLayout><Create/></SingleLayout>
    },
  ])
  return (
    <RouterProvider router = {router}/>
  );
}

export default withAuthenticator(App);
