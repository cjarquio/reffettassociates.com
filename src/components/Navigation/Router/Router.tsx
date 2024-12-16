import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import { Home } from "../../Home";
import { Veterans, About, Team, FeaturedRecruitments } from "../../About";
import TeamMember from "../../About/Team/TeamMember";
import { Services } from "../../Expertise";

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
        path: "/recruitments",
        element: <FeaturedRecruitments />,
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
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
]);
