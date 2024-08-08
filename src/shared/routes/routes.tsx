import App from "../../app/app";
import FoodTracker from "@pages/food-tracker";
import Home from "@pages/home";
import Login from "@pages/login";
import MealRegistration from "@pages/meal-registration";
import Mypage from "@pages/mypage";
import NotFound from "@pages/not-found";
import Signup from "@pages/signup";
import FoodDetail from "@pages/food-detail";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FoodTreats from "@pages/food-tracker/food-treats";
import Today from "@pages/food-tracker/today";
import Report from "@pages/food-tracker/report";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "/food-detail/:foodId", element: <FoodDetail /> },
      { path: "/food-tracker", element: <FoodTracker /> },
      { path: "/food-tracker/today", element: <Today /> },
      { path: "/food-tracker/food-treats", element: <FoodTreats /> },
      { path: "/food-tracker/report", element: <Report /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/mypage", element: <Mypage /> },
      { path: "/meal-registration", element: <MealRegistration /> },
    ],
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
