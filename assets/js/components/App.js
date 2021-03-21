import React from 'react';
import {CalculatorPage, HistoryPage, LoginPage} from "./pages";
import { Switch} from 'react-router-dom';
import * as Routes from '../constants/routes';
import {PublicRoute, PrivateRoute} from "../routes";

const App = () => {
    return (
        <main role="main" className="container">
            <Switch>
                <PrivateRoute path={Routes.HOME} component={CalculatorPage} exact/>
                <PrivateRoute path={Routes.HISTORY} component={HistoryPage} exact/>
                <PublicRoute path={Routes.LOGIN} restricted={true} component={LoginPage} exact/>
            </Switch>
        </main>
    );
};

export default App
