import React from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import PageTemplate from './components/PageTemplate';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import NewsPage from './components/NewsPage';
import ProcessPage from './components/ProcessPage';
import PageNotFound from './components/PageNotFound';


export default function Routes() {
  return (
    <HashRouter>
      <>
        <PageTemplate>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/about' component={AboutPage} />
            <Route path='/services' component={ServicesPage} />
            <Route path='/contact' component={ContactPage} />
            <Route path='/news' component={NewsPage} />
            <Route path='/processes' component={ProcessPage} />
            <Route component={PageNotFound} />
          </Switch>
        </PageTemplate>
      </>
    </HashRouter>
  );
}