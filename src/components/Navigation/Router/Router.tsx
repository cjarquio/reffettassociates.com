import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import { Home } from "../../Home";
import { Veterans, About, Team } from "../../About";
import TeamMember from "../../About/Team/TeamMember";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/team/:teamMember",
        element: <TeamMember />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/veterans",
        element: <Veterans />,
      },
    ],
  },
]);
