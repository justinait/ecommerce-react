import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartProvider';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      <CartProvider>        
        <BrowserRouter>
          < NavBar />
          <div className='content'>
            <Routes>

              <Route path='/' element={< ItemListContainer />} />

              <Route path='/category/:category' element={< ItemListContainer />} />
              <Route path='/category' element={< ItemListContainer />} />
              
              <Route path='/item/:id' element={< ItemDetailContainer />} />       

              <Route path='/cart' element={< Cart />}/>

              <Route path='/contact' element={< Contact />}/>

              <Route path='/about' element={< About />}/>

              <Route path='*' element={ <h1>ERROR 404</h1> } />

            </Routes>
          </div>
          <Footer/>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
