import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import BlogMainPage from 'components/BlogMainPage';
import BlogPage from 'components/BlogPage';
import HomePage from 'components/HomePage';
import ProjectMainPage from 'components/ProjectMainPage';

const Routes = () => (
    <Switch>
        <Route exact path='/' component={ HomePage }  />
        <Route       path='/blogs/:blog' component={ BlogPage } />
        <Route       path='/blogs' component={ BlogMainPage } />
        <Route       path='/projects/:project' component={ ProjectMainPage } />
    </Switch>
)

export default Routes;