import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import App from "../app";
import SnackList from "../pages/snack-list";
import Snack from "../pages/snack-list/snack";
import NotFound from "../pages/not-found";
import FoodList from "../pages/food-list";
import Food from "../pages/food-list/food";
import Login from "../pages/login";
import Signup from "../pages/signup";
import Mypage from "../pages/mypage";
import MealRegistration from "../pages/meal-registration";
import Meal from "../pages/meal-registration/meal";
import Puppy from "../pages/meal-registration/puppy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "/snack-list", element: <SnackList /> },
      { path: "/snack-list/:snackId", element: <Snack /> },
      { path: "/food-list", element: <FoodList /> },
      { path: "/food-list/:foodId", element: <Food /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/mypage", element: <Mypage /> },
      {
        path: "/meal-registration",
        element: <MealRegistration />,
        children: [
          { path: "meal", element: <Meal /> },
          { path: "puppy", element: <Puppy /> },
        ],
      },
    ],
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
