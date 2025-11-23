import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Root from "../pages/Root";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import TreamCondition from "../pages/TreamCondition";
import AllProduct from "../pages/AllProduct";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Dashboard from "../components/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/trams",
        element: <TreamCondition />,
      },
      {
        path: "/hotel",
        element: <AllProduct />,
      },
      {
        path: "/privacyPolicy",
        element: <PrivacyPolicy />,
      },
    ],
  },
  {
    path: "/bashboard",
    element: <Dashboard />,
  },
]);
export default router;
