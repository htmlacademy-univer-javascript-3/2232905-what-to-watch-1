import Main from '../../pages/main/main';

import {Route, Routes} from 'react-router-dom';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import Film from '../../pages/film/film';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import {AuthStatus} from '../../types/auth-status';
import {useAppSelector} from '../../hooks';
import LoadingScreen from '../../pages/loading/loading';
import HistoryRouter from '../history-route/hitstory-route';
import browserHistory from '../../browser-history';

type AppProps = {
  isAuth: AuthStatus;
}

function App({isAuth}: AppProps): JSX.Element {
  const {isFilmsLoaded, promoFilm} = useAppSelector((state) => state);
  if (isFilmsLoaded || !promoFilm)
  {
    return (
      <LoadingScreen/>
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path="*"
          element={<NotFound/>}
        />
        <Route path="/">x
          <Route index element={
            <Main isAuth={isAuth}/>
          }
          />
          <Route path="login" element={<SignIn/>}/>
          <Route path="mylist" element=
            {
              <PrivateRoute isAuthorised>
                <MyList />
              </PrivateRoute>
            }
          />
          <Route path="films/">
            <Route path=":id">
              <Route index element={<Film isAuth={isAuth}/>}/>
              <Route path="review" element={<AddReview isAuth={AuthStatus.Authorized}/>}/>
            </Route>
          </Route>
          <Route path="player/:id" element={<Player />}/>
        </Route>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
