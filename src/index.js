import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './redux/rootReducer';

// const store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(thunk))
// );
{/*<Provider store={store}>*/}
{/*</Provider>*/}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
registerServiceWorker();
