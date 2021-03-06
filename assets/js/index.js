import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {BrowserRouter as Router} from 'react-router-dom';
import {App, ErrorBoundary} from "./components";
import store from "./strore";
import {UserService} from "./services";
import {ServiceContext} from "./contexts";

const userService = new UserService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <ServiceContext.Provider value={{userService}}>
                <Router>
                    <App/>
                </Router>
            </ServiceContext.Provider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);
