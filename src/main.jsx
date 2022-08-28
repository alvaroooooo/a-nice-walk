import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './store'
import App from './App';

import './styles/index.css';
import './styles/App.css';
import './styles/utilities.css';
import './styles/simples.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="brand">
        <div>
          🔥👟 The Guide 👟🔥
        </div>
      </div>
      <App />
    </Provider>
  </React.StrictMode>
)
