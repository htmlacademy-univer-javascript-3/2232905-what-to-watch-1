import Main from '../../pages/main/main';
import {MainPageProps} from '../../pages/main/main';


function App(props: MainPageProps): JSX.Element {
  return (
    <Main promoFilmName={props.promoFilmName}
      promoFilmGenre={props.promoFilmGenre}
      promoFilmYear={props.promoFilmYear}
      promoFilmPosterImageSource={props.promoFilmPosterImageSource}
      promoFilmBackgroundImageSource={props.promoFilmBackgroundImageSource}
    />
  );
}

export default App;
