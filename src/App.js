import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartProvider';
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
  return (
    <div>
      <CartProvider>        
        <BrowserRouter>
          < NavBar />
          <Routes>

            <Route path='/' element={< Home />} />

            <Route path='/category/:category' element={< ItemListContainer />} />
            <Route path='/category' element={< ItemListContainer />} />
            
            <Route path='/item/:id' element={< ItemDetailContainer />} />       

            <Route path='/cart' element={< Cart />}/>

            <Route path='/about' element={< About />}/>

            <Route path='*' element={ <h1>ERROR 404</h1> } />

          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
