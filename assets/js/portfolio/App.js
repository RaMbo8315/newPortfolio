import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Landing from './pages/landing.js'
import About from './pages/about.js'

export default class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <Router>
        <div>
        <Route exact path="/" component={Landing} />
        <Route exact path="/About" component={About} />
        </div>
      </Router>
    )
  }
}

