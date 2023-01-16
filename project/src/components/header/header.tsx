import {PropsWithChildren} from 'react';
import Logo from '../logo/logo';
import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {logoutAction} from '../../store/api-actions';
import {getAuthorizationStatus, getUser} from '../../store/user-process/selectors';
import {AppRoute, AuthorizationStatus} from '../../const';

type HeaderProps = PropsWithChildren<{
  className: string;
}>

function UserBlock(){
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();

  const handleLinkClick = () => {
    dispatch(logoutAction());
  };

  const authorisedUserBlock = (
    <>
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link to={`/${AppRoute.MyList}`}>
            <img src={user?.avatarUrl} alt="User avatar" width="63" height="63"/>
          </Link>
        </div>
      </li>
      <li className="user-block__item">
        <Link to={`${AppRoute.Main}`} onClick={handleLinkClick} className="user-block__link">Sign out</Link>
      </li>
    </>);

  const notAuthorisedUserBlock = <Link to={`${AppRoute.Login}`} className="user-block__link">Sign in</Link>;

  let userBlock;
  switch (authorizationStatus) {
    case AuthorizationStatus.Auth:
      userBlock = authorisedUserBlock;
      break;
    case AuthorizationStatus.NoAuth:
      userBlock = notAuthorisedUserBlock;
      break;
  }

  return (<ul className='user-block'>{userBlock}</ul>);
}

function Header(props: HeaderProps) {
  return(
    <>
      <h1 className="visually-hidden">WTW</h1>
      <header className={`page-header ${props.className}`}>
        <Logo className='logo__link'/>
        {props.children}
        <UserBlock/>
      </header>
    </>
  );
}

export default Header;
