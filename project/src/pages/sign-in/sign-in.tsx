import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {loginAction} from '../../store/api-actions';
import {Navigate} from 'react-router-dom';
import {AuthData} from '../../types/auth-data';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {AuthorizationStatus} from '../../const';


function SignIn(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState(
    {
      email: '',
      password: '',
    }
  );

  const checkSignInForm = ({login, password}: AuthData) => {
    const isValidLogin = /^\S+@\S+\.\S+$/.test(login);
    const isValidPassword = /[A-Za-z]+/.test(password) && /[0-9]+/.test(password);

    if (!isValidPassword)
    {return 'We can’t recognize this email and password combination. Please try again.';}

    if (!isValidLogin)
    {return 'Please enter a valid email address';}

    return null;
  };

  const onChangeEmail = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const onChangePassword = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const onSubmitSignIn = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const errorMsg = checkSignInForm({login: formData.email, password: formData.password});
    setErrorMessage(errorMsg ?? '');
    if (!errorMsg)
    {
      dispatch(loginAction({login: formData.email, password: formData.password}));
    }
  };

  return authorizationStatus === AuthorizationStatus.Auth ? <Navigate to={'/'}/> : (
    <div className="user-page">
      <Header className='user-page__head'>
        <h1 className="page-title user-page__title">Sign in</h1>
      </Header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form" onSubmit={onSubmitSignIn}>
          {errorMessage ?
            <div className="sign-in__message">
              {errorMessage}
            </div> : ''}
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input onChange={onChangeEmail} className="sign-in__input" type="email" placeholder="Email address" name="email"
                id="email"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input onChange={onChangePassword} className="sign-in__input" type="password" placeholder="Password" name="password"
                id="password"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
}

export default SignIn;
