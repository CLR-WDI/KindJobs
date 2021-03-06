// setting up react router
import React from 'react'
import * as ReactRouter from 'react-router';
let Router = ReactRouter.Router;
let Route = ReactRouter.Route;
let applyRouterMiddleware = ReactRouter.applyRouterMiddleware;
let IndexRoute = ReactRouter.IndexRoute;
let HashHistory = ReactRouter.hashHistory;
import { useScroll } from 'react-router-scroll';

// importing the files required to render the views for the different routes
import Layout from "../components/Layout";
import Home from "../containers/HomeContainer";
import AdminCreateOptionsContainer from '../containers/AdminCreateOptionsContainer';
import AdminJobsContainer from '../containers/AdminJobsContainer';
import JobContainer from '../containers/JobContainer';
import ApplyContainer from '../containers/ApplyContainer';
import SearchResultsContainer from '../containers/SearchResultsContainer';
import AdvancedSearchContainer from '../containers/AdvancedSearchContainer';
import JobFormContainer from '../containers/JobFormContainer';
import AdminApplicationsContainer from '../containers/AdminApplicationsContainer';
import ApplicationContainer from '../containers/ApplicationContainer';
import LoginContainer from '../containers/LoginContainer';
import AdminUsersContainer from '../containers/AdminUsersContainer';
import ProfileContainer from '../containers/ProfileContainer'
import AboutContainer from '../containers/AboutContainer'

// defining which container file gets rendered for each route
// define history as hash history for routes
// include a page template called layout for the whole site
// define the index route as home 
let routes = (
  <Router history={HashHistory} render={applyRouterMiddleware(useScroll())}>
    <Route path="/" component={Layout}>
      <IndexRoute name="home" component={Home} />
      <Route path='login' component={LoginContainer} />
      <Route path='profile' component={ProfileContainer} />
      <Route path='results' component={SearchResultsContainer} />
      <Route path='advsearch' component={AdvancedSearchContainer } />
      <Route path='kindjobs/:id' component={JobContainer} />
      <Route path='apply/:id' component={ApplyContainer} />
      <Route path='about' component={AboutContainer} />
      <Route path='admin/users' component={AdminUsersContainer} />
      <Route path='admin/options' component={AdminCreateOptionsContainer} />
      <Route path='admin/kindjobs' component={AdminJobsContainer} />
      <Route path='admin/jobform' component={JobFormContainer} />
      <Route path='admin/jobform/:id' component={JobFormContainer} />
      <Route path='admin/applications' component={AdminApplicationsContainer} />
      <Route path='admin/applications/:id' component={ApplicationContainer} />
    </Route>
  </Router>
);

export default routes
