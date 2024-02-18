import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/page";
import App from "../app";
import SnackList from "../pages/snack-list/page";
import Snack from "../pages/snack-list/snack/page";
import NotFound from "../pages/not-found/page";
import FoodList from "../pages/food-list/page";
import Food from "../pages/food-list/food/page";
import Signin from "../pages/signin/page";
import Signup from "../pages/signup/page";
import Mypage from "../pages/mypage/page";
import MealRegistration from "../pages/meal-registration/page";

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
      { path: "/signin", element: <Signin /> },
      { path: "/signup", element: <Signup /> },
      { path: "/mypage", element: <Mypage /> },
      { path: "/meal-registration", element: <MealRegistration /> },
    ],
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
