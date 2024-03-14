import './App.css';
import Header from './components/home/header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePages from './components/pageContent/HomePages';
import Footer from './components/home/Footer';
import { Pages } from './components/pages/Pages';

function App() {
  return (

      <>
        <Router>
          <Header />
          <Switch>
            <Route path='/' exact component={HomePages}/>
            <Route path='/Pages' exact component={Pages}/>
          </Switch>
          <Footer />
          </Router>
      </>
    
  );
}

export default App;
