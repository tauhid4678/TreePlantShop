import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layouts/Mainlayout";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("/plants.json"),
      },
    ],
  },
]);

export default router;
