import Main from '../../pages/main/main';
import {MainPageProps} from '../../pages/main/main';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import Film from '../../pages/film/film';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';


function App(props: MainPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={<NotFound/>}
        />
        <Route path="/">x
          <Route index element={
            <Main promoFilmName={props.promoFilmName}
              promoFilmGenre={props.promoFilmGenre}
              promoFilmYear={props.promoFilmYear}
              promoFilmPosterImageSource={props.promoFilmPosterImageSource}
              promoFilmBackgroundImageSource={props.promoFilmBackgroundImageSource}
            />
          }
          />
          <Route path="login" element={<SignIn/>}/>
          <Route path="mylist" element=
            {
              <PrivateRoute isAuthorised={false}>
                <MyList/>
              </PrivateRoute>
            }
          />
          <Route path="films/">
            <Route path=":id/">
              <Route index element={<Film/>}/>
              <Route path="review" element={<AddReview/>}/>
            </Route>
          </Route>
          <Route path="player/:id" element={<Player/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
