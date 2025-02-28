import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicRouter from "./routes/PublicRouter";
import Home from "../pages/public/Home";
import Tourpackages from "../pages/public/Tourpackages";
import OurServices from "../pages/public/OurServices";
import Contactus from "../pages/public/Contactus";
import Gallery from "../pages/public/Gallery";
import Blogs from "../pages/public/Blogs";
import SinglePageBlog from "../pages/public/SinglePageBlog";
import PageNotFound from "../pages/public/PageNotFound";
import Tourpackagesbooking from "../pages/Dropdown/OurServices/Tourpackagesbooking";
import Hotelbooking from "../pages/Dropdown/OurServices/Hotelbooking";
import Transportbooking from "../pages/Dropdown/OurServices/Transportbooking";
import B2bdeals from "../pages/Dropdown/OurServices/B2bdeals";
import InternationalTours from "../pages/Dropdown/Tourpackages/InternationalTours"; // Added import
import DomesticTours from "../pages/Dropdown/Tourpackages/DomesticTours";  // Added import
import SpritualTours from "../pages/Dropdown/Tourpackages/SpritualTours ";
 

const routers = createBrowserRouter([
  {
    path: "/",
    element: <PublicRouter />,
    children: [
      { index: true, element: <Home /> },
      { path: "tourpackages", element: <Tourpackages /> },
      { path: "ourservices", element: <OurServices /> },
      { path: "gallery", element: <Gallery /> },
      { path: "blogs", element: <Blogs /> },
      { path: "contactus", element: <Contactus /> },
      { path: "singleblog/:id", element: <SinglePageBlog /> },
      { path: "*", element: <PageNotFound /> },
      { path: "ourservices/tourpackagesbooking", element: <Tourpackagesbooking /> },
      { path: "ourservices/hotelbooking", element: <Hotelbooking /> },
      { path: "ourservices/transportbooking", element: <Transportbooking /> },
      { path: "ourservices/b2bdeals", element: <B2bdeals /> },
      { path: "tourpackages/internationaltours", element: <InternationalTours /> },
      { path: "tourpackages/domestictours", element: <DomesticTours /> },
      { path: "tourpackages/spritualtours", element: <SpritualTours /> },
    ],
  },
]);

export default function MainRouter() {
  return <RouterProvider router={routers} />;
}
