import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {AuthStatus} from './types/auth-status';
import {Provider} from 'react-redux';
import {store} from './store';
import {fetchFilmsAction, fetchPromoFilmAction} from './store/api-actions';

store.dispatch(fetchFilmsAction());
store.dispatch(fetchPromoFilmAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App isAuth={AuthStatus.Authorized}/>
    </Provider>
  </React.StrictMode>,
);
