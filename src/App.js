import React from 'react';
import { BrowserRouter as Router, Switch, Route,  } from 'react-router-dom';

import Header from './components/headercomponents/header'
import Footer from './components/footercomponents/footer'
import HomePage from './components/pagescomponents/homepage'
import About from './components/pagescomponents/about'
import Service from './components/pagescomponents/service'
import Project from './components/pagescomponents/project'
import Contact from "./components/pagescomponents/contact"



function App() {
  return (
    <Router>

<div >
      <Header />
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/about' component={About} />
      <Route exact path='/service' component={Service} />
      <Route exact path='/project' component={Project} />
      <Route exact path='/contact' component={Contact} />
      
     
      
      </Switch>
      <Footer />
    </div>



    </Router>
    
  );
}

export default App;
