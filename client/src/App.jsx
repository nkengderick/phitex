import './App.css'

import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

import Home from './components/Home/Home'

const App = () => {
  return (
    <Router>
      <div className='App'>
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <div>
                <Header />
                <Navbar />
                <p>Hello World</p>
                <Home />
                <Footer />
              </div>
            </Route>



          </Switch>

        </div>

      </div>

    </Router>
  )
}

export default App