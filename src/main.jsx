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
import DashBoard from './Pages/Dashboard/DashBoard.jsx';
import AddMarathon from './Pages/AddMarathon/AddMarathon.jsx';
import Marathons from './Pages/Marathons/Marathons.jsx';
import MarathonDetails from './Pages/MarathonDetails/MarathonDetails.jsx';
import MyMarathonList from './Pages/MyMarathonList/MyMarathonList.jsx';
import MyApplyList from './Pages/MyApplyList/MyApplyList.jsx';
import AuthProvider from './Contexts/AuthContext/AuthProvider.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';

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
          element: <PrivateRoute><Marathons/></PrivateRoute>    //privateRoute
        },
        {
          path:'/addMarathon',
          element: <PrivateRoute><AddMarathon/></PrivateRoute>   //privateRoute
        },
        {
          path:'/marathon-details/:id',
          element: <PrivateRoute><MarathonDetails/></PrivateRoute>  //privateRoute
        },
        {
          path:'/myMarathonList/:id',
          element: <PrivateRoute><MyMarathonList/></PrivateRoute>  //privateRoute
        },
        {
          path:'/myApplyList/:id',
          element:  <PrivateRoute><MyApplyList/></PrivateRoute> //privateRoute
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
