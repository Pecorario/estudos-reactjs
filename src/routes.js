import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FirstPractice from './pages/first';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={FirstPractice} />
        </Switch>
    </BrowserRouter>
);


export default Routes;