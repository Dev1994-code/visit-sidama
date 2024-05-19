import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Landing from "./pages/Landing";
import HawassaCity from "./pages/hawassaCity";
import Signup from "./pages/Signup";
import Wendogenet from "./pages/Wendogenet";
import Yirgalem from "./pages/Yirgalem";
import { ConfigProvider } from "antd";
import Package from "./pages/Package";
import Fiche from "./pages/Fiche";
import StGabriel from "./pages/StGabriel";

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
        element: <Package />,
      },
      {
        path: "/fiche",
        element: <Fiche />,
      },
      {
        path: "/stgabriel",
        element: <StGabriel />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
    action: () => {
      console.log("hello there");
      return null;
    },
  },
  {
    path: "/signup",
    element: <Signup />,
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
