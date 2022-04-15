
import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import History from './History'
import Issues from './Issues'
import Footer from './Footer'
import NavBar from './NavBar'
import {Route, Switch} from 'react-router-dom'


const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/history" component={History} />
        <Route exact path="/issues" component={Issues} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
