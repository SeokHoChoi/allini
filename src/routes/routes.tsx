import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/page";
import App from "../app";
import List from "../pages/pet-food-items/page";
import DetailList from "../pages/pet-food-items/goods/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <NotFound />,
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "/pet-food-items/search", element: <List /> },
      { path: "/pet-food-items/goods/:snackId", element: <DetailList /> },
    ],
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
