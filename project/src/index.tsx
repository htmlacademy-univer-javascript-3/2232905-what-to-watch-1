import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './store';
import {checkAuthAction, getFavoriteFilmsAction, getFilmsAction, getPromoFilmAction} from './store/api-actions';

store.dispatch(checkAuthAction());
store.dispatch(getFilmsAction());
store.dispatch(getPromoFilmAction());
store.dispatch(getFavoriteFilmsAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
);
