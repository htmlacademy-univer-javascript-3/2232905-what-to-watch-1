import {Navigate} from 'react-router-dom';

type PrivateRouteProps = {
  isAuthorised: boolean;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps) {
  return(
    props.isAuthorised ?
      props.children :
      <Navigate to={'/login'}/>
  );
}

export default PrivateRoute;
