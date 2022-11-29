import {AuthStatus} from '../../types/auth-status';
import {PropsWithChildren} from 'react';
import Logo from '../logo/logo';
import {Link} from 'react-router-dom';

type HeaderProps = PropsWithChildren<{
  isAuthorised: AuthStatus;
  className: string;
}>

function UserBlock({isAuthorised} : {isAuthorised: AuthStatus}){

  const authorisedUserBlock = (
    <>
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
        </div>
      </li>
      <li className="user-block__item">
        <Link to="/login" className="user-block__link">Sign out</Link>
      </li>
    </>);

  const notAuthorisedUserBlock = <Link to="/login" className="user-block__link">Sign in</Link>;

  let userBlock;
  switch (isAuthorised) {
    case AuthStatus.Authorized:
      userBlock = authorisedUserBlock;
      break;
    case AuthStatus.NotAuthorized:
      userBlock = notAuthorisedUserBlock;
      break;
    case AuthStatus.OnSignInPage:
      userBlock = null;
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

        <UserBlock isAuthorised={props.isAuthorised}/>
      </header>
    </>
  );
}

export default Header;
