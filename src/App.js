import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Header from './components/home/header/Header';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (

      <>
        <Router>
          <Header />
          <Switch>
            <Router path='/' exact />
          </Switch>
          </Router>
      </>
    
  );
}

export default App;
