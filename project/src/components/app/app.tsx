import Main from '../../pages/main/main';

import {Route, Routes} from 'react-router-dom';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import Film from '../../pages/film/film';
import AddReview from '../../pages/add-review/add-review';
import Player from '../../pages/player/player';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import LoadingScreen from '../loading/loading';
import HistoryRouter from '../history-route/hitstory-route';
import browserHistory from '../../browser-history';
import {getAuthorizationStatus, getIsCheckAuthLoaded} from '../../store/user-process/selectors';
import {useAppSelector} from '../../hooks';
import {getIsDataLoaded} from '../../store/main-process/selectors';
import {AppRoute} from '../../const';


function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isDataLoaded = useAppSelector(getIsDataLoaded);
  const isCheckAuthLoaded = useAppSelector(getIsCheckAuthLoaded);
  if (!isDataLoaded || !isCheckAuthLoaded)
  {
    return (
      <LoadingScreen/>
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.NotFound}
          element={<NotFound/>}
        />
        <Route path={AppRoute.Main}>x
          <Route index element={
            <Main/>
          }
          />
          <Route path={AppRoute.Login} element={<SignIn/>}/>
          <Route path={AppRoute.MyList} element=
            {
              <PrivateRoute authorizationStatus={authorizationStatus}>
                <MyList />
              </PrivateRoute>
            }
          />
          <Route path={`${AppRoute.Films}/`}>
            <Route path=":id">
              <Route index element={<Film/>}/>
              <Route path={`${AppRoute.AddReview}`} element=
                {
                  <PrivateRoute authorizationStatus={authorizationStatus}>
                    <AddReview/>
                  </PrivateRoute>
                }
              />
            </Route>
          </Route>
          <Route path={`${AppRoute.Player}/:id`} element={<Player />}/>
        </Route>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
