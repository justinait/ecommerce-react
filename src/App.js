import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <div className="App">
      < NavBar />
      < ItemListContainer greeting="Flores"/>
      < ItemListContainer greeting="Paisaje entrerriano"/>
      < ItemListContainer greeting="Paisaje santafesino"/>
    </div>
  );
}

export default App;
