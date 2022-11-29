import Logo from '../logo/logo';


function Footer(): JSX.Element {
  return (
    <footer className="page-footer">
      <Logo className='logo__link logo__link--light'/>

      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default Footer;
