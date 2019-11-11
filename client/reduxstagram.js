// let's go!
import React from 'react';
import { render } from 'react-dom';

//import css
import css from './styles/style.styl';

// import components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// import deps react-router

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

// sentry
import * as Sentry from '@sentry/browser';
import { logException } from './data/config';

Sentry.init({dsn: process.env.DSN_KEY});
console.log(process.env.DSN_KEY);

logException(new Error('Incomplete Data!'), {
    email: 'koladeore@gmail.com'
  });
  
Sentry.showReportDialog();

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
       </Router>
    </Provider>
)

render(router, document.getElementById('root'));