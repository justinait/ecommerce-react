import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      < NavBar />
      < ItemListContainer section="Mas vendidos" />
    </div>
  );
}

export default App;
