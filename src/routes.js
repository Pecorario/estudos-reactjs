import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Principal from './pages/principal';
import FirstPractice from './pages/first';
import SecondPractice from './pages/second';
import ThirdPractice from './pages/third';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Principal} />
            <Route path="/first" component={FirstPractice} />
            <Route path="/contador" component={SecondPractice} />
            <Route path="/cropper" component={ThirdPractice} />
        </Switch>
    </BrowserRouter>
);


export default Routes;