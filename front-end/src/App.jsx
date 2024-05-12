import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, Admin, Login } from "./pages";
import Landing from "./pages/Landing";
import HawassaCity from "./pages/hawassaCity";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/hawassaCity",
        element: <HawassaCity />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
