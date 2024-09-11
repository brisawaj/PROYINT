import './App.css';
import './index.css';
import {Link, Route, Switch} from 'react-router-dom';
import Home from './screens/home/home';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      
       <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
