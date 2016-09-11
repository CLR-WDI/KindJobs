// setting up react router
import React from 'react'
import * as ReactRouter from 'react-router';
let Router = ReactRouter.Router;
let Route = ReactRouter.Route;
let IndexRoute = ReactRouter.IndexRoute;
let HashHistory = ReactRouter.hashHistory;

import Layout from "../components/Layout";
import Home from "../containers/HomeContainer"
import JobContainer from '../containers/JobContainer';
import ApplyContainer from '../containers/ApplyContainer';
import SearchResultsContainer from '../containers/SearchResultsContainer';
import DummyContainer from '../containers/DummyContainer';

import JobForm from '../components/JobForm';


let routes = (
  <Router history={HashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route path='kindjobs/:id' component={JobContainer} />
      <Route path='apply/:id' component={ApplyContainer} />
      <Route path='jobform' component={JobForm} />
      <Route path='results' component={SearchResultsContainer} />
      <Route path='dummy' header='This is Dummy' component={DummyContainer} />
    </Route>
  </Router>
);

export default routes
