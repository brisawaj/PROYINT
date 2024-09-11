import './App.css';
import './index.css';
import {Link, Route, Switch} from 'react-router-dom';
import Home from './screens/home/home';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
       <Header />
      <Home />
    </div>
  );
}

export default App;
