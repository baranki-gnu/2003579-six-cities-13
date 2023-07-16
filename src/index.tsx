import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const AccomodationData = 5;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App accomodationNumber={AccomodationData}></App>
  </React.StrictMode>
);
