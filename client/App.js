
import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import FAQs from './FAQs'
import History from './History'
import Issues from './Issues'
import Letters from './Letters'
import Reasons from './Reasons'
import Footer from './Footer'
import NavBar from './NavBar'
import {Route, Switch} from 'react-router-dom'


const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/contact/" component={Contact} />
        <Route path="/history/" component={History} />
        <Route path="/issues/" component={Issues} />
        <Route path="/housing/" component={FAQs} />
        <Route path="/letters/" component={Letters} />
        <Route path="/public-land/" component={Reasons} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
