import { Children } from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../App";
import About from "../components/About";
// import Blog from "../components/Blog";
import Login from "../components/Login";
import Logout from "../components/Logout";
import Signup from "../components/Signup";
import Dashboard from "../Dashboard/Dashboard";
import DashboardLayout from "../Dashboard/DashboardLayout";
import EditBooks from "../Dashboard/EditBooks";
import ManageBooks from "../Dashboard/ManageBooks";
import UploadBook from "../Dashboard/UploadBook";
import Home from "../home/Home";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Shop from "../shop/Shop";
import SingleBook from "../shop/SingleBook";


const router = createBrowserRouter([
    //frontend
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />

            },
            {
                path: "/shop",
                element: <Shop />
            },
            {
                path: "/about",
                element: <About />
            },
            // {
            //     path: "/blog",
            //     element: <Blog />
            // },
            {
                path: "/book/:id",
                element: <SingleBook />,
                loader: ({ params }) => fetch(`http://localhost:3000/book/${params.id}`)
            }
        ]
    },

    //backend
    {
        path: "/admin/dashboard",
        element: <PrivateRoute> <DashboardLayout /> </PrivateRoute>,
        children: [
            {
                path: "/admin/dashboard",
                element: <Dashboard />
            },
            {
                path: "/admin/dashboard/upload",
                element: <UploadBook />
            },
            {
                path: "/admin/dashboard/manage",
                element: <ManageBooks />
            },
            {
                path: "/admin/dashboard/edit-books/:id",
                element: <EditBooks />,
                loader: ({ params }) => fetch(`http://localhost:3000/book/${params.id}`)
            }
        ]
    },

    {
        path: "sign-up",
        element: <Signup />
    },
    {
        path: "login",
        element: <Login />
    },
    {
        path: "logout",
        element: <Logout />
    }
]);

export default router;