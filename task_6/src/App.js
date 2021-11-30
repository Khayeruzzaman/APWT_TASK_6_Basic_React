
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/home';
import Studentlist from './components/studentlist';
import Contact from './components/contact';
import Studentsdetails from './components/studentsdetails';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route exact path="/studentlist">
            <Studentlist/>
          </Route>

          <Route exact path="/contact">
            <Contact/>
          </Route>

          <Route exact path="/studentsdetails/:id/:name/:cgpa">
          <Studentsdetails/>
          </Route>

        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
