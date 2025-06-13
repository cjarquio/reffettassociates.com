import { createBrowserRouter } from 'react-router-dom';
import AppLayout from './AppLayout';
import { Home } from '../../Home';
import { About, Team } from '../../About';
import TeamMember from '../../About/Team/TeamMember';
import { Contact } from '../../Contact';
import {
  ExecutiveTransferAssistance,
  Process,
  Services,
  Veterans,
} from '../../Expertise';
import {
  GovernmentContracting,
  Manufacturing,
  NonProfits,
  PrivateSector,
  PublicSector,
  Retail,
} from '../../Industries';
import { InternalNews, News } from '../../News';
import { ErrorPage } from '../../ErrorPage/ErrorPage';

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      // {
      //   path: "/recruitments",
      //   element: <FeaturedRecruitments />,
      // },
      {
        path: '/team/:teamMember',
        element: <TeamMember />,
      },
      {
        path: '/team',
        element: <Team />,
      },
      {
        path: '/veterans',
        element: <Veterans />,
      },
      {
        path: '/services',
        element: <Services />,
      },
      {
        path: '/process',
        element: <Process />,
      },
      {
        path: '/executive-transfer-assistance',
        element: <ExecutiveTransferAssistance />,
      },
      {
        path: '/retail',
        element: <Retail />,
      },
      {
        path: '/public-sector',
        element: <PublicSector />,
      },
      {
        path: '/private-sector',
        element: <PrivateSector />,
      },
      {
        path: '/nonprofits',
        element: <NonProfits />,
      },
      {
        path: '/manufacturing-and-industrials',
        element: <Manufacturing />,
      },
      {
        path: '/government-contracting',
        element: <GovernmentContracting />,
      },
      {
        path: '/insights/:topicId',
        element: <InternalNews />,
      },
      {
        path: '/insights',
        element: <News />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);
