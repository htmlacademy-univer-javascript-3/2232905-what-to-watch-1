import {Navigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import {AuthStatus} from '../../constants/constants';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps) {
  const {authorizationStatus} = useAppSelector((state) => state);
  return(
    authorizationStatus === AuthStatus.Auth ?
      props.children :
      <Navigate to={'/login'}/>
  );
}

export default PrivateRoute;
