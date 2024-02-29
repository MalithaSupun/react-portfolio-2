import './App.css';
import Header from './components/home/header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePages from './components/pageContent/HomePages';

function App() {
  return (

      <>
        <Router>
          <Header />
          <Switch>
            <Route path='/' exact component={HomePages}/>
          </Switch>
          </Router>
      </>
    
  );
}

export default App;
