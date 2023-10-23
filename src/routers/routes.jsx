import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/Mainlayout"
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/reguster/Register";
import About from "../pages/about/About";
import Services from "../pages/services/Services";
import Blog from "../pages/blog/Blog";
import Contact from "../pages/contact/Contact";
import Error from "../pages/error/Error";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
            path: "/",
            element: <Home />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/services",
          element: <Services />
        },
        {
          path: "/blog",
          element: <Blog />
        },
        {
          path: "/contact",
          element: <Contact />
        }
      ]
    },
  ]);


  export default router