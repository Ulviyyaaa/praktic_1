import { createBrowserRouter } from "react-router-dom";
import AddPage from "../Pages/AddPage";
import Home from "../Pages/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
        path: "/add",
        element: <AddPage/>,
      },
  ]);
  export {router}