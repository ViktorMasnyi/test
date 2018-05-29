import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Blog from '../Blog/Blog';
import ClubPage from '../../components/ClubPage/ClubPage';
import NotFoundPage from '../../components/NotFoundPage/NotFoundPage';
import TaskSelector from '../../components/TaskSelector/TaskSelector';


const HomePage = () => (
  <Switch>
    <Route exact path="/" component={TaskSelector} />
    <Route exact path="/club" component={ClubPage} />
    <Route exact path="/blog" component={Blog} />
    <Route path="*" component={NotFoundPage} />
  </Switch>
);

export default HomePage;
