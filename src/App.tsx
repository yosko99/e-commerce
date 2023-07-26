import React from 'react';

import './styles/bootstrap.min.css';
import './styles/js/mdb.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navigation from './components/utils/Navigation';
import GlobalCSS from './styles/global.css';
import ProductListingPage from './views/ProductListingPage';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="App">
        <GlobalCSS />
        <Routes>
          <Route path="/" element={<ProductListingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
