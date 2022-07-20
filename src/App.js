import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <div className="App">
      < NavBar />
      <ItemListContainer greeting="Más vendidos"/>
      <ItemListContainer greeting="Más recientes"/>
      <ItemListContainer greeting="Premiados"/>
    </div>
  );
}

export default App;
