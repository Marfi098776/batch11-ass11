import { StrictMode, Suspense } from 'react'
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
import MyApplyList from './Pages/MyApplyList/MyApplyList.jsx';
import AuthProvider from './Contexts/AuthContext/AuthProvider.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';
import Error from './Pages/Error/Error.jsx';
import Loading from './Pages/Loading/Loading.jsx';
import ApplyMarathon from './Pages/ApplyMarathon/ApplyMarathon.jsx';
import MyMarathons from './Pages/MyMarathons/MyMarathons.jsx';
import ViewApplications from './Pages/ViewApplications/ViewApplications.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Error></Error>,
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
          element: <PrivateRoute><Suspense fallback={<Loading></Loading>}><MarathonDetails/></Suspense></PrivateRoute>,//privateRoute
          loader: ({params}) => fetch(`https://marathon-server-ebon.vercel.app/marathon-details/${params.id}`),
        },
        {
          path:'/myMarathon',
          element: <PrivateRoute><MyMarathons/></PrivateRoute>  //privateRoute
        },
        {
          path: '/applyMarathon/:id',
          element: <PrivateRoute><Suspense fallback={<Loading></Loading>}><ApplyMarathon/></Suspense></PrivateRoute>,
          loader: ({params}) => fetch(`https://marathon-server-ebon.vercel.app/marathon-details/${params.id}`)
          
        },
        {
          path:'/myApply/',
          element:  <PrivateRoute><MyApplyList/></PrivateRoute> //privateRoute
        },
        {
          path:'applications/:marathon_id',
          element: <PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>,
          loader: ({params}) => fetch(`https://marathon-server-ebon.vercel.app/applications/marathons/${params.marathon_id}`)
        },
        {
          path:'/dashboard',
          element: <PrivateRoute><DashBoard/></PrivateRoute>
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
      <Suspense fallback={<Loading></Loading>}>
      <RouterProvider router={router} />
      </Suspense>
    </AuthProvider>
  </StrictMode>,
)
