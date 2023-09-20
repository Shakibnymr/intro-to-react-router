import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Header from './components/Header/Header.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Users from './components/Users/Users.jsx';
import UserDetails from './components/UserDetails/UserDetails.jsx';
import Posts from './components/Posts/Posts.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
  children: [
    {
      path: '/about',
      element: <About></About>
    },
    {
        path: '/contact', 
        element: <Contact></Contact>
      },
      {
        path: '/users',
        loader: ()=>fetch('https://jsonplaceholder.org/users'),
        element: <Users></Users>
      },
      {
        path: '/user/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.org/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      },
      {
path: '/posts',
loader: () => fetch('https://jsonplaceholder.org/posts'),
element: <Posts></Posts>
      },
      {
        path: '/post/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.org/posts/${params.postId}`),
        element: <PostDetails></PostDetails>
      }
  ]
  }
])
  
  // ,{
  //   path: '/about',
  //   element: <Header></Header>
  // },

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
