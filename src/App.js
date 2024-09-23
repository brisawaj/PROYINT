import './App.css';
import './index.css';
import {Link, Route, Switch, BrowserRouter} from 'react-router-dom';
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
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/favoritos" component={Favoritos}  />
          <Route path="/top" component={Top}  />
          <Route path="/popular" component={PopularMovies}  />
          <Route path="/busqueda/" component={Buscador}  />
          <Route path="/pelicula/:id" component={ScreenDetallePelicula}  />
          <Route path="*" component={NotFound}  />
        </Switch>
        <Footer/>
      </div>
  );
}

export default App;
