import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ConfigureStore from './store/configureStore'

const AppStore = ConfigureStore();
const Root = ({ store }) => (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(
    <Root store={AppStore} />
    , document.getElementById('root'));
registerServiceWorker();
