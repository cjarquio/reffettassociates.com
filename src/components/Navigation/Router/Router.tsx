import { createBrowserRouter } from "react-router-dom";
import { Veterans } from "../../About";
import AppLayout from "./AppLayout";
import { Home } from "../../Home";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/veterans",
        element: <Veterans />,
      },
    ],
  },
]);
