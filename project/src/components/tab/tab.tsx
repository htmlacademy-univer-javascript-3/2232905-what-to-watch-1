import {FilmInfo} from '../../types/film-info';
import FilmOverview from './film-overview';
import FilmDetails from './film-details';
import FilmReviews from './film-reviews';
import {useState} from 'react';

type TabProps = {
  filmInfo: FilmInfo;
}

function Tab(props: TabProps) {
  const tabContent = ['Overview', 'Details', 'Reviews'];

  const [tab, setTab] = useState(tabContent[0]);

  const renderTab = () => {
    switch (tab) {
      case 'Details':
        return <FilmDetails filmInfo={props.filmInfo}/>;
      case 'Reviews':
        return <FilmReviews filmInfo={props.filmInfo}/>;
      default:
        return <FilmOverview filmInfo={props.filmInfo}/>;
    }
  };

  const renderNavigation = () => {
    const tabs = [];

    for (const content of tabContent){
      const className = content === tab ? 'film-nav__item--active' : '';
      tabs.push(
        <li className={`film-nav__item ${className}`}>
          <button className="film-nav__link"
            onClick={() => setTab(content)}
            style={{background:'transparent', border:'none'}}
          >
            {content}
          </button>
        </li> );
    }

    return (
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          { tabs }
        </ul>
      </nav>
    );
  };

  return (
    <div className="film-card__desc">
      { renderNavigation() }
      { renderTab() }
    </div>
  );
}

export default Tab;
