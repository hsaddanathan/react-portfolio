import React from "react";
import { HashRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home/Home";
import Portfolio from "./containers/Portfolio/Portfolio";
import Contact from "./containers/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
    <Router basename="/">
     
        <Navbar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
      </div>
  );
}

export default App;
