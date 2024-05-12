import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, Admin, Login, Register } from "./pages";
import Landing from "./pages/Landing";
import HawassaCity from "./pages/hawassaCity";

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
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
  },

  {
    path: "/register",
    element: <Register />,
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
