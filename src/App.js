import './App.css';
import './index.css';
import {Link, Route, Switch, Routes, BrowserRouter} from 'react-router-dom';
import Header from './components/Header/Header';
import NotFound from './screens/NotFound/NotFound';
import Favoritos from './screens/Favoritos/Favoritos';
import Top from './screens/Top/Top';
import Footer from './components/Footer/Footer';
import PopularMovies from './screens/PopularMovies/PopularMovies';
import Buscador from './screens/Buscador/Buscador';
import ScreenDetallePelicula from './screens/ScreenDetallePelicula/ScreenDetallePelicula';
import Home from './screens/Home/Home';

function App() {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/favoritos" element={<Favoritos/>}  />
          <Route path="/top" element={<Top/>}  />
          <Route path="/popular" element={<PopularMovies/>}  />
          <Route path="/busqueda/:query" element={<Buscador/>}  />
          <Route path="/pelicula/:id" element={<ScreenDetallePelicula />}  />
          <Route path="*" element={<NotFound/>}  />
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;
