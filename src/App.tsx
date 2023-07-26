import React, { useEffect } from 'react';

import './styles/bootstrap.min.css';
import './styles/js/mdb.min.js';
import { useAtom } from 'jotai';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import selectedCategoryAtom from './atoms/selectedCategory.atom';
import selectedProductsAtom from './atoms/selectedProducts.atom';
import Footer from './components/utils/Footer';
import Navigation from './components/utils/Navigation';
import products from './data/products';
import GlobalCSS from './styles/global.css';
import ProductListingPage from './views/ProductListingPage';

const App = () => {
  const [selectedProducts, setSelectedProducts] = useAtom(selectedProductsAtom);
  const [selectedCategory] = useAtom(selectedCategoryAtom);

  useEffect(() => {
    setSelectedProducts(
      products.filter(
        (product) => product.primary_category_id === selectedCategory.id
      )
    );
  }, []);

  return (
    <BrowserRouter>
      <Navigation />
      <div className="App">
        <GlobalCSS />
        <Routes>
          <Route path="/*" element={<ProductListingPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
