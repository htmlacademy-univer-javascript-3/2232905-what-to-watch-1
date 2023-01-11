import {Navigate} from 'react-router-dom';
import {AuthStatus} from '../../constants/constants';

type PrivateRouteProps = {
  authorizationStatus: AuthStatus;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps) {
  return(
    props.authorizationStatus === AuthStatus.Auth ?
      props.children :
      <Navigate to={'/login'}/>
  );
}

export default PrivateRoute;
