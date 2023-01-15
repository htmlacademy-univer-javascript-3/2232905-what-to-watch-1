import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps) {
  return(
    props.authorizationStatus === AuthorizationStatus.Auth ?
      props.children :
      <Navigate to={AppRoute.Login}/>
  );
}

export default PrivateRoute;
