import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'unstated';

import './index.css';

import ErrorBoundary from './containers/errorboundary';

import Lang from 'contexts/lang';

import App from './App';

// Login
// Filter
// Cart
// Pagination

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider inject={[Lang]}>
        <App />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
