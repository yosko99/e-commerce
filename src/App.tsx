import React from 'react';

import './styles/bootstrap.min.css';
import './styles/js/mdb.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalCSS from './styles/global.css';
import ProductListingPage from './views/ProductListingPage';

const App = () => {
  return (
    <BrowserRouter>
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
