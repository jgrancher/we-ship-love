// Externals
import codePush from 'react-native-code-push';
import React from 'react';
import { Provider } from 'react-redux';

// Containers & components
import App from './containers/App';

// Store
import createStore from './store';

// Creating store
const store = createStore();

const Application = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default codePush(Application);
