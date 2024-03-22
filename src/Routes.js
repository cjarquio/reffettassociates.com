import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import PageTemplate from './components/PageTemplate';
import HomePage from './components/HomePage';
import TeamPage from './components/TeamPage';
import VeteransPage from './components/VeteransPage';
import OfficesPage from './components/OfficesPage';
import ServicesPage from './components/ServicesPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ProcessPage from './components/ProcessPage';
import ETAPage from './components/ETAPage';
import InternalNews from './components/InternalNewsPage';
import NewsPage from './components/NewsPage';
import PageNotFound from './components/PageNotFound';
import Services from './components/Services';
import FeaturedJobsPage from './components/FeaturedJobs';


export default function Routes() {
  return (
    <HashRouter>
      <>
        <PageTemplate>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/about/:topicId' component={Services} />
            <Route path='/about' component={AboutPage} />
            <Route path='/team' component={TeamPage} />
            <Route path='/offices' component={OfficesPage} />
            <Route path='/services' component={ServicesPage} />
            <Route path='/veterans' component={VeteransPage} />
            <Route path='/process' component={ProcessPage} />
            <Route path='/eta' component={ETAPage} />
            <Route path='/contact' component={ContactPage} />
            <Route path='/news/:topicId' component={InternalNews} />
            <Route path='/news' component={NewsPage} />
            <Route path='/featuredrecruitments' component={FeaturedJobsPage} />
            <Route component={PageNotFound} />
          </Switch>
        </PageTemplate>
      </>
    </HashRouter>
  );
}