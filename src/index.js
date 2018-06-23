import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { createBrowserHistory } from 'history'
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
import registerServiceWorker from './registerServiceWorker';
import authReducer from './store/reducers/auth';
import * as actions from './store/actions/index';
import RouterCom from './RouterCom';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    auth: authReducer
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

store.dispatch( actions.authCheckState() );

const app = (
    <Provider store={store}>
        <Router history={createBrowserHistory()}>
                <RouterCom/>
        </Router>
    </Provider>
);

ReactDOM.render(
    app,
    document.getElementById('root')
);
registerServiceWorker();
