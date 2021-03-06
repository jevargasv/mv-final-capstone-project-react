import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Category from './Category';
import categories from '../constants/categories';
import { prettifySlug } from '../helpers';

const Home = () => (
  <Router>
    <h2>Categories</h2>
    <ul>
      {Object.keys(categories).map(c => (<li key={c}><Link to={`/${c}`}>{prettifySlug(c)}</Link></li>))}
    </ul>

    <Switch>
      <Route path="/:category"><Category /></Route>
    </Switch>
  </Router>
);
export default Home;
