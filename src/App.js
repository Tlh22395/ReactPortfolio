import React from 'react';
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/navbar/Navbar";



const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;