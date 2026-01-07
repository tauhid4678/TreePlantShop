import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layouts/Mainlayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Plants from "../Pages/Plants";
import PlantDetails from "../Pages/PlantDetails";
import PrivateRoute from "../Components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch("/plants.json"),
      },

      {
        path: "login",
        element: <Login />,
      },

      {
        path: "register",
        element: <Register />,
      },

      {
        path: "plants",
        element: <Plants />,
        loader: () => fetch("/plants.json"),
      },
      {
        path: "plants/:id",
        element: (
          <PrivateRoute>
            <PlantDetails />
          </PrivateRoute>
        ),
        loader: () => fetch("/plants.json"),
      },
    ],
  },
]);

export default router;
