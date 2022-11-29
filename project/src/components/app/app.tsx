import Main from '../../pages/main/main';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import Film from '../../pages/film/film';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import {AuthStatus} from '../../types/auth-status';
import {FilmInfo} from '../../types/film-info';

type AppProps = {
  promoFilm: FilmInfo;
  films: FilmInfo[];
  isAuth: AuthStatus;
}

function App({promoFilm, films, isAuth}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={<NotFound/>}
        />
        <Route path="/">x
          <Route index element={
            <Main isAuth={isAuth} films={films} promoFilm={promoFilm}/>
          }
          />
          <Route path="login" element={<SignIn/>}/>
          <Route path="mylist" element=
            {
              <PrivateRoute isAuthorised>
                <MyList films={films.slice(0, 8)}/>
              </PrivateRoute>
            }
          />
          <Route path="films/">
            <Route path=":id/">
              <Route index element={<Film films={films} isAuth={isAuth}/>}/>
              <Route path="review" element={<AddReview films={films} isAuth={AuthStatus.Authorized}/>}/>
            </Route>
          </Route>
          <Route path="player/:id" element={<Player films={films}/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
