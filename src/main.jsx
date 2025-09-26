import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './Layouts/RootLayout.jsx';
import Home from './Pages/Home/Home.jsx';
import SignIn from './Pages/SignIn/SignIn.jsx';
import Register from './Pages/Register/Register.jsx';
import Profile from './Pages/Dashboard/DashBoard.jsx';
import DashBoard from './Pages/Dashboard/DashBoard.jsx';
import AddMarathon from './Pages/AddMarathon/AddMarathon.jsx';
import Marathons from './Pages/Marathons/Marathons.jsx';
import MarathonDetails from './Pages/MarathonDetails/MarathonDetails.jsx';
import MyMarathonList from './Pages/MyMarathonList/MyMarathonList.jsx';
import MyApplyList from './Pages/MyApplyList/MyApplyList.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home,
        },
        {
          path:'/marathons',
          element: <Marathons/>    //privateRoute
        },
        {
          path:'/addMarathon',
          element: <AddMarathon/>   //privateRoute
        },
        {
          path:'/marathon-details/:id',
          element: <MarathonDetails/>  //privateRoute
        },
        {
          path:'/myMarathonList/:id',
          element: <MyMarathonList/>  //privateRoute
        },
        {
          path:'/myApplyList/:id',
          element:  <MyApplyList/> //privateRoute
        },
        {
          path:'/dashboard',
          element: <DashBoard/>
        },
        {
          path:'/register',
          element: <Register/>
        },
        {
          path:'/logIn',
          element: <SignIn/>
        }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
