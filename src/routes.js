import React from 'react';

import Logon from './pages/Logon';
import Nav from './components/Nav';

import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/area-administrativa" component={Nav} />
            </Switch>
        </BrowserRouter>
    );
}