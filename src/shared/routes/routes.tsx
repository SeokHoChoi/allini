import App from "../../app/app";
import FoodList from "@pages/food-list";
import Food from "@pages/food-list/food";
import FoodTracker from "@pages/food-tracker";
import Home from "@pages/home";
import Login from "@pages/login";
import MealRegistration from "@pages/meal-registration";
import Mypage from "@pages/mypage";
import NotFound from "@pages/not-found";
import Signup from "@pages/signup";
import SnackList from "@pages/snack-list";
import Snack from "@pages/snack-list/snack";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "/snack-list", element: <SnackList /> },
      { path: "/snack-list/:snackId", element: <Snack /> },
      { path: "/food-tracker", element: <FoodTracker /> },
      { path: "/food-list", element: <FoodList /> },
      { path: "/food-list/:foodId", element: <Food /> },
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
