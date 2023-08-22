import { Helmet } from 'react-helmet-async';
import FavoritesEmptyPage from './favorites-empty-page';
import { store } from '../../store';
import { useAppSelector } from '../../hooks';
import { fetchFavoritesListAction } from '../../store/api-actions';

import FavoritesList from '../../components/favorites-list/favorites-list';

// type FavoritesPageProps = {
//   offersList: AccomodationListItem[];
// }

function FavoritesPage(/*{ offersList }: FavoritesPageProps*/): JSX.Element {

  store.dispatch(fetchFavoritesListAction());
  const favoritesList = useAppSelector((state) => state.favoritesList);

  if(favoritesList.length === 0) {
    return (
      <FavoritesEmptyPage />
    );
  }

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--favorites">
        <FavoritesList offersList={favoritesList}/>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesPage;
