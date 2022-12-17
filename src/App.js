import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home.js'
import Cart from './components/Cart.js'
import Payment from './components/Payment.js'
import CartProvider from './CartContext.js';
function App() {
  return (
    <CartProvider>
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/cart' element={<Cart/>}/>
          <Route exact path='/payment' element={<Payment/>}/>
        </Routes>
      </Router>
    </div>
  </CartProvider>
  );
}

export default App;
