import React, { useState, useEffect } from 'react';
import Menu from './components/menu/Menu';
import About from './components/about/About';
import Contact from './components/contact/Contact'
import Home from './components/home/Home';
import Shop from './components/shop/Shop';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/footer/Footer';

import { commerce } from './lib/commerce';
import ProductsList from './components/ProductsList';

function App() {
  
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    commerce.products.list().then((products) => {
      setProducts(products.data);
    }).catch((error) => {
      console.log('There was an error fetching the products', error)
    });
  }

  useEffect(() => {
    fetchProducts();
  }, [])
 
  return (
    <Router>
      <Menu/>
      <ProductsList
        products={products}
      />

      {/* <Switch>
        <Route path='/about'>
          <About/>
        </Route>

        <Route path='/shop'>
          <Shop/>
        </Route>

        <Route path='/contact'>
          <Contact/>
        </Route>

        <Route path='/' exact>
          <Home/>
        </Route>
      </Switch>
      <Footer/> */}
    </Router>
  )
}

export default App
