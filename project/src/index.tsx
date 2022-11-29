import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {films} from './mocks/films';
import {AuthStatus} from './types/auth-status';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App promoFilm={films[0]} films={films} isAuth={AuthStatus.Authorized}/>
  </React.StrictMode>,
);
