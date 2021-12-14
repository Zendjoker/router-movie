
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Contact from './Components/Page/Contact';
import Home from './Components/Page/Home';
import NavBar from './Components/NavBar/NavBar';
function App() {
  return (
    <>
      <Switch >
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <NavBar />
      
      </>
  );
}

export default App;
