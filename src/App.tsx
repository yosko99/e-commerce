import React from 'react';

import './styles/bootstrap.min.css';
import './styles/js/mdb.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/utils/Footer';
import Navigation from './components/utils/Navigation';
import GlobalCSS from './styles/global.css';
import ProductListingPage from './views/ProductListingPage';
import RedirectPage from './views/RedirectPage';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="App">
        <GlobalCSS />
        <Routes>
          <Route path="/" element={<RedirectPage />} />
          <Route
            path="/:category/:subcategory"
            element={<ProductListingPage />}
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
