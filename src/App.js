import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        < NavBar />
        <Routes>

          <Route path='/' element={< ItemListContainer section="Mas vendidos" />} />
          <Route path='*' element={ <h1>ERROR 404</h1> } />

          <Route path='/item/:id' element={< ItemDetailContainer />} />
          <Route path='/category/:id' element={< ItemListContainer />} />
          
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
