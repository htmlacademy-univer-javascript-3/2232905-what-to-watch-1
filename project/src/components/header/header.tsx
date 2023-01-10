import {PropsWithChildren} from 'react';
import Logo from '../logo/logo';
import {Link} from 'react-router-dom';
import {AuthStatus} from '../../constants/constants';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {logoutAction} from '../../store/api-actions';

type HeaderProps = PropsWithChildren<{
  className: string;
}>

function UserBlock(){
  const {authorizationStatus, user} = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const onClickSignOut = () => {
    dispatch(logoutAction());
  };

  const authorisedUserBlock = (
    <>
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src={user?.avatarUrl} alt="User avatar" width="63" height="63"/>
        </div>
      </li>
      <li className="user-block__item">
        <Link to="/" onClick={onClickSignOut} className="user-block__link">Sign out</Link>
      </li>
    </>);

  const notAuthorisedUserBlock = <Link to="/login" className="user-block__link">Sign in</Link>;

  let userBlock;
  switch (authorizationStatus) {
    case AuthStatus.Auth:
      userBlock = authorisedUserBlock;
      break;
    case AuthStatus.NoAuth:
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
