import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './component/home'
import About from './component/about'
import Contact from './component/contact'
import Post from './component/post'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/:post_id' component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
