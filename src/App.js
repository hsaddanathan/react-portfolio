import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home/Home";
import Portfolio from "./containers/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import Contact from "./containers/Contact/Contact"
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Footer />
      </div>
      </Router>
    
  );
}

export default App;
