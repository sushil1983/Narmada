import React from 'react';
import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom';

import Header from './components/headercomponents/header'
import Footer from './components/footercomponents/footer'
import HomePage from './components/pagescomponents/homepage';
import About from './components/pagescomponents/about'
function App() {
  return (
    <Router>

<div >
      <Header />
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/about' component={About} />
      </Switch>
      <Footer />
    </div>



    </Router>
    
  );
}

export default App;
