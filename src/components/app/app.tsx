import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../const';

import LoginCheck from '../login-check/login-check';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import MainPage from '../../pages/main-page/main-page';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import { AccomodationListItem } from '../../types/accomodation-item';

type AppProps = {
  offersData: AccomodationListItem[];
  offersList: AccomodationListItem[];
}

function App({offersData, offersList}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route index path={AppRoute.Root} element={<MainPage offersData={offersData} />} />
          <Route path={AppRoute.Favorites} element={
            <LoginCheck authorizationStatus={AuthorizationStatus.Auth}>
              <FavoritesPage offersList = {offersList}/>
            </LoginCheck>
          }
          />
          <Route path={AppRoute.Login} element={<LoginPage />} />
          <Route path={AppRoute.Offer} element={<OfferPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;