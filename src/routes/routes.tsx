import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
