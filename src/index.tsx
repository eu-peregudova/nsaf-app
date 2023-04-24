import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

import App from './components/App/App';
import {Provider} from "react-redux";
import {store} from "./store/store";
import {ErrorBoundary} from "react-error-boundary";
import Fallback from "./components/ErrorBoundary/fallbackRender";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary FallbackComponent={Fallback}>
        <App />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>
);
