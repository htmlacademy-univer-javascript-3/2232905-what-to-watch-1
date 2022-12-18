import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {films} from './mocks/films';
import {AuthStatus} from './types/auth-status';
import {Provider} from 'react-redux';
import {store} from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App promoFilm={films[0]} films={films} isAuth={AuthStatus.Authorized}/>
    </Provider>
  </React.StrictMode>,
);
