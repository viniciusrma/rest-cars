import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/cards';
import Cars from './pages/crud';
import CarsForm from './pages/crud/form';
import CarDetail from './pages/crud/detail';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cars" exact component={Cars} />
      <Route path="/cars_form" exact component={CarsForm} />
      <Route path="/cars_form/:id" exact component={CarsForm} />
      <Route path="/cars/:id" exact component={CarDetail} />
    </Switch>
  );
};

export default Routes;
