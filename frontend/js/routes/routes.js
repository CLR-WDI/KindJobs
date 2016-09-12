// setting up react router
import React from 'react'
import * as ReactRouter from 'react-router';
let Router = ReactRouter.Router;
let Route = ReactRouter.Route;
let IndexRoute = ReactRouter.IndexRoute;
let HashHistory = ReactRouter.hashHistory;

import Layout from "../components/Layout";
import Home from "../containers/HomeContainer"
import AdminJobsContainer from '../containers/AdminJobsContainer';
import JobContainer from '../containers/JobContainer';
import ApplyContainer from '../containers/ApplyContainer';
import SearchResultsContainer from '../containers/SearchResultsContainer';
import AdvancedSearchContainer from '../containers/AdvancedSearchContainer';
import DummyContainer from '../containers/DummyContainer';

import JobFormContainer from '../containers/JobFormContainer';


let routes = (
  <Router history={HashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute name="home" component={Home} />
      <Route path='kindjobs/:id' component={JobContainer} />
      <Route path='apply/:id' component={ApplyContainer} />
      <Route path='admin/kindjobs' component={AdminJobsContainer} />
      <Route path='jobform' component={JobFormContainer} />
      <Route path='jobform/:id' component={JobFormContainer} />
      <Route path='results' component={SearchResultsContainer} />
      <Route path='advsearch' component={AdvancedSearchContainer } />
      <Route path='dummy' header='This is Dummy' component={DummyContainer} />
    </Route>
  </Router>
);

export default routes
