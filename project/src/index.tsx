import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      promoFilmName='The Grand Budapest Hotel'
      promoFilmGenre='Drama'
      promoFilmYear={2014}
      promoFilmPosterImageSource='img/the-grand-budapest-hotel-poster.jpg'
      promoFilmBackgroundImageSource='img/bg-the-grand-budapest-hotel.jpg'
    />
  </React.StrictMode>,
);
