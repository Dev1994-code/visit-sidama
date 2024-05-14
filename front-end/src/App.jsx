import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import HawassaCity from "./pages/hawassaCity";
import Signup from "./pages/Signup";
import Wendogenet from "./pages/Wendogenet";
import Yirgalem from "./pages/Yirgalem";
import Package1 from "./pages/Package1";
import { ConfigProvider } from "antd";

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
        path: "/wendogenet",
        element: <Wendogenet />,
      },
      {
        path: "/yirgalem",
        element: <Yirgalem />,
      },
      {
        path: "/destination/:id",
        element: <Package1 />,
      },
    ],
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
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#a3e635",
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
};
export default App;
