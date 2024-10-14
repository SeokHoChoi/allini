// routes.js or Routes.jsx

import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import App from "../app";
import DefaultLayout from "@layouts/defaultLayout";
import NoHeaderLayout from "@layouts/noHeaderLayout";
import Home from "@pages/home";
import FoodDetail from "@pages/food-detail";
import FoodTracker from "@pages/food-tracker";
import Today from "@pages/food-tracker/today";
import FoodTreats from "@pages/food-tracker/food-treats";
import Report from "@pages/food-tracker/report";
import Mypage from "@pages/mypage";
import Register from "@pages/register";
import Food from "@pages/register/food";
import Puppy from "@pages/register/puppy";
import Login from "@pages/login";
import Signup from "@pages/signup";
import NotFound from "@pages/not-found";
import About from "@pages/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Root component
    errorElement: <NotFound />,
    children: [
      {
        element: <DefaultLayout />, // Layout with Header and Footer
        children: [
          { index: true, element: <Home /> },
          { path: "food-detail/:foodId", element: <FoodDetail /> },
          {
            path: "food-tracker",
            element: <FoodTracker />,
            // food-tracker로 진입 시 today로 리다이렉트
            children: [
              { index: true, element: <Navigate to="today" /> },
              { path: "today", element: <Today /> },
              { path: "food-treats", element: <FoodTreats /> },
              { path: "report", element: <Report /> },
            ],
          },
          { path: "mypage", element: <Mypage /> },
          { path: "register", element: <Register /> },
          { path: "register/food", element: <Food /> },
          { path: "register/puppy", element: <Puppy /> },
          { path: "signup", element: <Signup /> },
          { path: "about", element: <About /> },
        ],
      },
      {
        element: <NoHeaderLayout />,
        children: [{ path: "login", element: <Login /> }],
      },
    ],
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
