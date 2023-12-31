import React from 'react';

import './styles/bootstrap.min.css';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/utils/Footer';
import GlobalCSS from './styles/global.css';
import CartPage from './views/CartPage';
import FavoritesPage from './views/FavoritesPage';
import ProductListingPage from './views/ProductListingPage';
import RedirectPage from './views/RedirectPage';

const App = () => {
  return (
    <AnimatePresence mode="wait">
      <BrowserRouter>
        <div className="App">
          <GlobalCSS />
          <Routes>
            <Route path="/" element={<RedirectPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route
              path="/:category/:subcategory"
              element={<ProductListingPage />}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AnimatePresence>
  );
};

export default App;
