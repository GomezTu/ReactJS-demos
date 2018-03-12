import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import configureStore from './store/configureStore'

const appStore = configureStore();

const Root = ({ store }) => (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(
    <Root store={appStore} />,
    document.getElementById('root')
);