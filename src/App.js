import React from 'react';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Single from './Pages/Single/Single';
import Explore from './Pages/Explore/Explore';
import Reels from './Pages/Reels/Reels';
import Message from './Pages/Message/Message';
import Settings from './Pages/Settings/Settings';
import Create from './Pages/CreatePost/Create';
import SingleLayout from './components/Layout/SingleLayout';
import Layout from './components/Layout/Layout';
import { Auth } from "aws-amplify"
import './app.scss';
import { useEffect } from 'react';
import { useState } from 'react';
import { usersByUserIdAndId } from './graphql/queries';

Amplify.configure(awsconfig);

function App({ signOut, user }) {
  const [currUser, setCurrUser] = useState({})
  const [authUser, setAuthUser] = useState({})
  useEffect(()=>{
    const getUser = async ()=>{
      const AuthUser =await Auth.currentAuthenticatedUser()
      const savedUser = await API.graphql(graphqlOperation(usersByUserIdAndId, {userId: `${AuthUser.attributes.sub}`}))
      setCurrUser(savedUser.data.usersByUserIdAndId.items[0])
      setAuthUser(AuthUser)
  }
  getUser()
  },[])
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout user={currUser}/>,
      children: [
        {
          path: '/',
          element: <Home user={currUser} auth = {authUser}/>,
        },
      ],
    },
    {
      path: '/single/:id',
      element: <SingleLayout><Single /></SingleLayout>,
    },
    {
      path: '/single/explore',
      element: <SingleLayout><Explore /></SingleLayout>,
    },
    {
      path: '/single/reel',
      element: <SingleLayout><Reels /></SingleLayout>,
    },
    {
      path: '/single/message/:id',
      element: <SingleLayout><Message /></SingleLayout>,
    },
    {
      path: '/single/edit/:id',
      element: <SingleLayout><Settings /></SingleLayout>,
    },
    {
      path: '/single/create/:id',
      element: <SingleLayout><Create /></SingleLayout>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default withAuthenticator(App);
