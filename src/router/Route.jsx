import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Favourites from "../pages/Favourites/Favourites";
import Phone from "../pages/Phone/Phone";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("Phones.json"),
      },

      {
        path: "/favourite",
        element: <Favourites></Favourites>,
      },
      {
        path: "/phones/:id",
        loader: () => fetch("Phones.json"),
        element: <Phone></Phone>,
      },
    ],
  },
]);

export default router;
