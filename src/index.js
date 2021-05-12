// REACT
import React from 'react';
import ReactDOM from 'react-dom';

// REDUX
import {Provider} from 'react-redux';

// COMPONENTS
import App from './components/App';
import store from './Redux/store';


// Rendu front-end de l'application
ReactDOM.render(
  <React.StrictMode>
    {/** permet de faire appel à Redux sur l'ensemble de l'application */} 
    <Provider store={store}>
      {/** appel de l'application en tant que soi */} 
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);