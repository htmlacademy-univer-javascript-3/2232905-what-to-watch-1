import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';

function NotFound(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo className={'logo__link'}/>
      </header>
      <h1 style={{textAlign: 'center'}}>404. Not found</h1>
      <Footer/>
    </div>
  );
}

export default NotFound;
