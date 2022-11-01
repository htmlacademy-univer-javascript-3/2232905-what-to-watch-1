import SmallFilmCard, {SmallFilmCardProps} from '../../components/small-film-card/small-film-card';


const films: SmallFilmCardProps[] = [
  {posterImageSource: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg',
    filmName: 'Fantastic Beasts: The Crimes of Grindelwald'},
  {posterImageSource: 'img/bohemian-rhapsody.jpg',
    filmName: 'Bohemian Rhapsody'},
  {posterImageSource:'img/macbeth.jpg',
    filmName:'Macbeth'},
  {posterImageSource:'img/aviator.jpg',
    filmName:'Aviator'},
  {posterImageSource:'img/we-need-to-talk-about-kevin.jpg',
    filmName:'We need to talk about Kevin'},
  {posterImageSource:'img/what-we-do-in-the-shadows.jpg',
    filmName:'What We Do in the Shadows'},
  {posterImageSource:'img/revenant.jpg',
    filmName:'Revenant'},
  {posterImageSource:'img/johnny-english.jpg',
    filmName:'Johnny English'},
  {posterImageSource:'img/shutter-island.jpg',
    filmName:'Shutter Island'},
];

function MyList(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="main.html" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">9</span></h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link">Sign out</a>
          </li>
        </ul>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {
            films.map(
              (filmCardProps) =>
                (<SmallFilmCard key={filmCardProps.filmName} posterImageSource={filmCardProps.posterImageSource} filmName={filmCardProps.filmName}/>)
            )
          }
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyList;
