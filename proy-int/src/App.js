import './App.css';
import './index.css';
import {Link, Route, Switch, Routes, BrowserRouter} from 'react-router-dom';
import Home from './screens/Home/Home';
import Header from './components/Header/Header';
import NotFound from './screens/NotFound/NotFound';
import Favoritos from './screens/Favoritos/Favoritos';
import Top from './screens/Top/Top';
import Footer from './components/Footer/Footer';
import Upcoming from './screens/Upcoming/Upcoming';

function App() {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/favoritos" element={<Favoritos/>}  />
          <Route path="/top" element={<Top/>}  />
          <Route path="/upcoming" element={<Upcoming/>}  />
          <Route path="*" element={<NotFound/>}  />
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;
