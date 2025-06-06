import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Products from '../pages/Products';
import Contact from '../pages/Contact';
import Cart from '../pages/Cart';
import Payment from '../pages/Payment';
import Login from '../pages/Login';
import Admin from '../pages/Admin';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/products', element: <Products /> },
  { path: '/contact', element: <Contact /> },
  { path: '/cart', element: <Cart /> },
  { path: '/payment', element: <Payment /> },
  { path: '/login', element: <Login /> },
  { path: '/admin', element: <Admin /> },
]);

export default router;
